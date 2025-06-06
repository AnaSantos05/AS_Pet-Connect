from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)  # Permite chamadas do frontend React

FILE_PATH = 'pets.json'


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

    # Adicionar propriedades default se não estiverem presentes
    data['image'] = data.get('image', '/images/logo.png')
    data['status'] = data.get('status', 'Care-Taker not assigned yet')
    data['statusColor'] = data.get('statusColor', 'red')

    # Add unique ID for the pet
    pets = load_pets()
    data['id'] = len(pets) + 1  # Simple ID generation

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


# Update the assign_caretaker_to_pet function to handle hotel assignments

@app.route('/api/pets/<int:pet_id>/assign-caretaker', methods=['PUT'])
def assign_caretaker_to_pet(pet_id):
    data = request.get_json()
    
    if not data or 'caretaker_id' not in data:
        return jsonify({'error': 'caretaker_id é obrigatório'}), 400
    
    caretaker_id = data['caretaker_id']
    
    # Special handling for hotel (ID 999)
    if caretaker_id == 999:
        # Hotel assignment logic
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
    
    # Regular caretaker assignment logic
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


# New endpoint to get pet services
@app.route('/api/pets/<int:pet_id>/services', methods=['GET'])
def get_pet_services(pet_id):
    """Get all services for a specific pet"""
    
    # Find the pet first
    pets = load_pets()
    pet = next((p for p in pets if p.get('id') == pet_id), None)
    
    if not pet:
        return jsonify({'error': 'Pet não encontrado'}), 404
    
    # Load all pet service records
    pet_services = load_pet_services()
    
    # Filter services for this specific pet
    pet_specific_services = [s for s in pet_services if s.get('pet_id') == pet_id]
    
    # Separate into active and past services
    active_services = []
    past_services = []
    
    for service in pet_specific_services:
        if service.get('status') in ['In Progress', 'Active', 'Ongoing']:
            active_services.append(service)
        else:
            past_services.append(service)
    
    # If no real services exist, return mock data based on pet's current status
    if not pet_specific_services:
        if pet.get('status') == 'Care-Taker assigned (Hotel)':
            active_services = [{
                'id': 1,
                'type': 'Hotel Accommodation',
                'provider': 'Hotel Bicho Solto',
                'startDate': '2025-01-15',
                'endDate': '2025-01-20',
                'status': 'In Progress',
                'price': '35€/day',
                'pet_id': pet_id
            }]
        elif pet.get('status') == 'Care-Taker assigned':
            active_services = [{
                'id': 2,
                'type': 'Pet-sitting',
                'provider': 'João Ferreira',
                'startDate': '2025-01-15',
                'endDate': '2025-01-20',
                'status': 'In Progress',
                'price': '25€/day',
                'pet_id': pet_id
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
                'price': '30€',
                'pet_id': pet_id
            },
            {
                'id': 4,
                'type': 'Pet-walking',
                'provider': 'Maria Silva',
                'startDate': '2024-11-20',
                'endDate': '2024-11-25',
                'status': 'Completed',
                'price': '5€/hour',
                'pet_id': pet_id
            }
        ]
    
    return jsonify({
        'active': active_services,
        'past': past_services
    })


@app.route('/')
def index():
    return "API para gerir pets - Hotel Bicho Solto"

#---------------------------------------------------------------------------------------------------
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

    # Verificar se provider_id corresponde a um utilizador válido e do tipo sitter
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


# Pet Services Management
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
    
    # Verify pet exists
    pets = load_pets()
    pet = next((p for p in pets if p.get('id') == data['pet_id']), None)
    if not pet:
        return jsonify({'error': 'Pet não encontrado'}), 404
    
    pet_services = load_pet_services()
    data['id'] = len(pet_services) + 1
    
    pet_services.append(data)
    save_pet_services(pet_services)
    
    return jsonify({'message': 'Serviço de pet adicionado com sucesso!', 'service': data}), 201


# ----------------------------USERS------------------

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
    required_fields = ['email', 'password', 'type']  # type obrigatório

    missing = [field for field in required_fields if not user.get(field)]
    if missing:
        return jsonify({"error": f"Campos em falta: {', '.join(missing)}"}), 400

    data = load_users()
    if any(u['email'] == user['email'] for u in data["users"]):
        return jsonify({"error": "Email já registado"}), 409

    user["id"] = len(data["users"]) + 1
    data["users"].append(user)
    save_users(data)

    return jsonify({"message": "Utilizador registado", "id": user["id"]}), 201


@app.route('/login', methods=['POST'])
def login_user():
    credentials = request.get_json()
    if not credentials.get('email') or not credentials.get('password'):
        return jsonify({"error": "Email e password são obrigatórios"}), 400

    data = load_users()
    user = next((u for u in data["users"]
                 if u["email"] == credentials["email"] and u["password"] == credentials["password"]), None)

    if user:
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


if __name__ == '__main__':
    app.run(debug=True)