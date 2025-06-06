from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
import hashlib
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)

FILE_PATH = 'pets.json'

def hash_password(password):
    """Hash a password using MD5"""
    return hashlib.md5(password.encode()).hexdigest()

def verify_password(password, stored_hash):
    """Verify a password against its hash"""
    return hashlib.md5(password.encode()).hexdigest() == stored_hash

def is_password_hashed(password):
    """Check if password is already hashed (MD5 is 32 characters)"""
    return len(password) == 32 and all(c in '0123456789abcdef' for c in password.lower())

def load_pets():
    if os.path.exists(FILE_PATH):
        with open(FILE_PATH, 'r') as f:
            return json.load(f)
    return []

def save_pets(pets):
    with open(FILE_PATH, 'w') as f:
        json.dump(pets, f, indent=2)

@app.route('/api/pets/<name>', methods=['GET'])
def get_pet_by_name(name):
    pets = load_pets()
    decoded_name = name.strip().lower()
    for pet in pets:
        if pet['name'].strip().lower() == decoded_name:
            return jsonify(pet)
    return jsonify({'error': 'Pet não encontrado'}), 404

@app.route('/add_pet', methods=['POST'])
def add_pet():
    data = request.get_json()

    required_fields = ['name', 'race', 'age', 'gender', 'notes', 'owner_id']
    missing_fields = [field for field in required_fields if field not in data or data[field] == '']

    if missing_fields:
        return jsonify({'error': f'Campos em falta: {", ".join(missing_fields)}'}), 400

    data['image'] = data.get('image', '/images/logo.png')
    data['status'] = data.get('status', 'Care-Taker not assigned yet')
    data['statusColor'] = data.get('statusColor', 'red')

    pets = load_pets()
    data['id'] = len(pets) + 1

    pets.append(data)
    save_pets(pets)
    return jsonify({'message': 'Pet adicionado com sucesso!', 'pet_id': data['id']}), 201

@app.route('/api/pets', methods=['GET'])
def get_pets():
    pets = load_pets()
    owner_id = request.args.get('owner_id')
    if owner_id:
        pets = [pet for pet in pets if str(pet.get('owner_id')) == owner_id]
    return jsonify(pets)

@app.route('/api/pets/<int:pet_id>/assign-caretaker', methods=['PUT'])
def assign_caretaker_to_pet(pet_id):
    data = request.get_json()
    
    if not data or 'caretaker_id' not in data:
        return jsonify({'error': 'caretaker_id é obrigatório'}), 400
    
    caretaker_id = data['caretaker_id']
    
    if caretaker_id == 999:
        pets = load_pets()
        pet_index = next((i for i, pet in enumerate(pets) if pet.get('id') == pet_id), None)
        
        if pet_index is None:
            return jsonify({'error': 'Pet não encontrado'}), 404
        
        pets[pet_index]['status'] = "Care-Taker assigned (Hotel)"
        pets[pet_index]['statusColor'] = "green"
        pets[pet_index]['caretaker_id'] = caretaker_id
        pets[pet_index]['caretaker_type'] = "hotel"
        
        save_pets(pets)
        return jsonify({'message': 'Hotel atribuído com sucesso', 'pet': pets[pet_index]}), 200
    
    users_data = load_users()
    caretaker = next((u for u in users_data["users"] if u["id"] == caretaker_id), None)
    
    if not caretaker:
        return jsonify({'error': 'Cuidador não encontrado'}), 404
    if caretaker.get("type") != "sitter":
        return jsonify({'error': 'Utilizador não é um pet sitter'}), 400
    
    pets = load_pets()
    pet_index = next((i for i, pet in enumerate(pets) if pet.get('id') == pet_id), None)
    
    if pet_index is None:
        return jsonify({'error': 'Pet não encontrado'}), 404
    
    pets[pet_index]['status'] = "Care-Taker assigned"
    pets[pet_index]['statusColor'] = "green"
    pets[pet_index]['caretaker_id'] = caretaker_id
    pets[pet_index]['caretaker_type'] = "individual"
    
    save_pets(pets)
    
    return jsonify({
        'message': 'Cuidador atribuído com sucesso',
        'pet': pets[pet_index]
    }), 200

# Service pricing configuration
SERVICE_PRICES = {
    'Pet-sitting': {'daily': 25, 'currency': '€'},
    'Hotel Accommodation': {'daily': 35, 'currency': '€'},
    'Pet-walking': {'hourly': 5, 'currency': '€'},
    'Grooming': {'service': 30, 'currency': '€'},
    'Training': {'hourly': 15, 'currency': '€'}
}

def calculate_service_price(service_type, duration_days=1, duration_hours=1):
    """Calculate the price for a service based on type and duration"""
    if service_type not in SERVICE_PRICES:
        return "Price not available"
    
    price_info = SERVICE_PRICES[service_type]
    
    if 'daily' in price_info:
        total = price_info['daily'] * duration_days
        return f"{total}{price_info['currency']}"
    elif 'hourly' in price_info:
        total = price_info['hourly'] * duration_hours
        return f"{total}{price_info['currency']}"
    elif 'service' in price_info:
        return f"{price_info['service']}{price_info['currency']}"
    
    return "Price not available"

@app.route('/api/pets/<int:pet_id>/services', methods=['GET'])
def get_pet_services(pet_id):
    """Get all services for a specific pet"""
    
    pets = load_pets()
    pet = next((p for p in pets if p.get('id') == pet_id), None)
    
    if not pet:
        return jsonify({'error': 'Pet não encontrado'}), 404
    
    pet_services = load_pet_services()
    pet_specific_services = [s for s in pet_services if s.get('pet_id') == pet_id]
    
    active_services = []
    past_services = []
    
    for service in pet_specific_services:
        if service.get('status') in ['In Progress', 'Active', 'Ongoing']:
            active_services.append(service)
        else:
            past_services.append(service)
    
    # If no real services exist, return mock data based on pet's current status
    if not pet_specific_services:
        current_date = datetime.now().strftime('%Y-%m-%d')
        end_date = (datetime.now() + timedelta(days=5)).strftime('%Y-%m-%d')
        
        if pet.get('status') == 'Care-Taker assigned (Hotel)':
            price = calculate_service_price('Hotel Accommodation', 5)
            active_services = [{
                'id': 1,
                'type': 'Hotel Accommodation',
                'provider': 'Hotel Bicho Solto',
                'startDate': current_date,
                'endDate': end_date,
                'status': 'In Progress',
                'price': price,
                'pet_id': pet_id,
                'pet_name': pet.get('name', 'Unknown')
            }]
        elif pet.get('status') == 'Care-Taker assigned':
            price = calculate_service_price('Pet-sitting', 5)
            active_services = [{
                'id': 2,
                'type': 'Pet-sitting',
                'provider': 'João Ferreira',
                'startDate': current_date,
                'endDate': end_date,
                'status': 'In Progress',
                'price': price,
                'pet_id': pet_id,
                'pet_name': pet.get('name', 'Unknown')
            }]
        
        # Add some mock past services
        past_services = [
            {
                'id': 3,
                'type': 'Grooming',
                'provider': 'Hotel Bicho Solto',
                'startDate': '2024-12-10',
                'endDate': '2024-12-10',
                'status': 'Completed',
                'price': calculate_service_price('Grooming'),
                'pet_id': pet_id,
                'pet_name': pet.get('name', 'Unknown')
            },
            {
                'id': 4,
                'type': 'Pet-walking',
                'provider': 'Maria Silva',
                'startDate': '2024-11-20',
                'endDate': '2024-11-25',
                'status': 'Completed',
                'price': calculate_service_price('Pet-walking', 1, 10),
                'pet_id': pet_id,
                'pet_name': pet.get('name', 'Unknown')
            }
        ]
    
    return jsonify({
        'active': active_services,
        'past': past_services
    })

@app.route('/')
def index():
    return "API para gerir pets - Hotel Bicho Solto"

SERVICES_FILE = 'services.json'

def load_services():
    if os.path.exists(SERVICES_FILE):
        with open(SERVICES_FILE, 'r') as f:
            return json.load(f)
    return []

def save_services(services):
    with open(SERVICES_FILE, 'w') as f:
        json.dump(services, f, indent=2)

@app.route('/api/services', methods=['GET'])
def get_services():
    services = load_services()
    return jsonify(services)

@app.route('/api/services', methods=['POST'])
def add_service():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'Nenhum dado recebido'}), 400

    required_fields = ['type', 'animals', 'description', 'provider_id']
    missing_fields = [field for field in required_fields if field not in data or not data[field]]

    if missing_fields:
        return jsonify({'error': f'Campos em falta: {", ".join(missing_fields)}'}), 400

    users_data = load_users()
    user = next((u for u in users_data["users"] if u["id"] == data["provider_id"]), None)

    if not user:
        return jsonify({'error': 'Utilizador não encontrado'}), 404
    if user.get("type") != "sitter":
        return jsonify({'error': 'Apenas pet sitters podem adicionar serviços'}), 403

    services = load_services()
    services.append(data)
    save_services(services)

    return jsonify({'message': 'Serviço adicionado com sucesso!'}), 201

PET_SERVICES_FILE = 'pet_services.json'

def load_pet_services():
    if os.path.exists(PET_SERVICES_FILE):
        with open(PET_SERVICES_FILE, 'r') as f:
            return json.load(f)
    return []

def save_pet_services(pet_services):
    with open(PET_SERVICES_FILE, 'w') as f:
        json.dump(pet_services, f, indent=2)

@app.route('/api/pet-services', methods=['POST'])
def add_pet_service():
    """Add a new service record for a specific pet"""
    data = request.get_json()
    
    required_fields = ['pet_id', 'type', 'provider', 'startDate', 'status']
    missing_fields = [field for field in required_fields if field not in data or not data[field]]
    
    if missing_fields:
        return jsonify({'error': f'Campos em falta: {", ".join(missing_fields)}'}), 400
    
    pets = load_pets()
    pet = next((p for p in pets if p.get('id') == data['pet_id']), None)
    if not pet:
        return jsonify({'error': 'Pet não encontrado'}), 404
    
    # Calculate price if not provided
    if 'price' not in data:
        duration_days = 5  # Default duration
        data['price'] = calculate_service_price(data['type'], duration_days)
    
    # Add pet name for reference
    data['pet_name'] = pet.get('name', 'Unknown')
    
    pet_services = load_pet_services()
    data['id'] = len(pet_services) + 1
    data['created_at'] = datetime.now().isoformat()
    
    pet_services.append(data)
    save_pet_services(pet_services)
    
    return jsonify({'message': 'Serviço de pet adicionado com sucesso!', 'service': data}), 201

# Users management with encrypted passwords
USERS_FILE = "users.json"

def load_users():
    if not os.path.exists(USERS_FILE):
        with open(USERS_FILE, 'w') as f:
            json.dump({"users": []}, f)
    with open(USERS_FILE, 'r') as f:
        return json.load(f)

def save_users(data):
    with open(USERS_FILE, 'w') as f:
        json.dump(data, f, indent=4)

@app.route('/register', methods=['POST'])
def register_user():
    user = request.get_json()
    required_fields = ['email', 'password', 'type']

    missing = [field for field in required_fields if not user.get(field)]
    if missing:
        return jsonify({"error": f"Campos em falta: {', '.join(missing)}"}), 400

    data = load_users()
    if any(u['email'] == user['email'] for u in data["users"]):
        return jsonify({"error": "Email já registado"}), 409

    # Hash the password before storing
    user["password"] = hash_password(user["password"])
    user["id"] = len(data["users"]) + 1
    user["created_at"] = datetime.now().isoformat()
    
    data["users"].append(user)
    save_users(data)

    return jsonify({"message": "Utilizador registado", "id": user["id"]}), 201

@app.route('/login', methods=['POST'])
def login_user():
    credentials = request.get_json()
    if not credentials.get('email') or not credentials.get('password'):
        return jsonify({"error": "Email e password são obrigatórios"}), 400

    data = load_users()
    user = next((u for u in data["users"] if u["email"] == credentials["email"]), None)

    if not user:
        return jsonify({"error": "Email ou password incorretos"}), 401

    # Verify password against stored hash
    if verify_password(credentials["password"], user["password"]):
        return jsonify({
            "message": "Login bem-sucedido",
            "user": {
                "id": user["id"],
                "email": user["email"],
                "name": user.get("name", ""),
                "type": user.get("type", "")
            }
        }), 200
    else:
        return jsonify({"error": "Email ou password incorretos"}), 401

@app.route('/api/service-pricing', methods=['GET'])
def get_service_pricing():
    """Get pricing information for all services"""
    return jsonify(SERVICE_PRICES)

@app.route('/api/calculate-price', methods=['POST'])
def calculate_price():
    """Calculate price for a specific service configuration"""
    data = request.get_json()
    
    service_type = data.get('service_type')
    duration_days = data.get('duration_days', 1)
    duration_hours = data.get('duration_hours', 1)
    
    if not service_type:
        return jsonify({'error': 'service_type é obrigatório'}), 400
    
    price = calculate_service_price(service_type, duration_days, duration_hours)
    
    return jsonify({
        'service_type': service_type,
        'price': price,
        'duration_days': duration_days,
        'duration_hours': duration_hours
    })

if __name__ == '__main__':
    app.run(debug=True)