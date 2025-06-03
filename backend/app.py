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

    pets = load_pets()
    pets.append(data)
    save_pets(pets)
    return jsonify({'message': 'Pet adicionado com sucesso!'}), 201

@app.route('/api/pets', methods=['GET'])
def get_pets():
    pets = load_pets()
    owner_id = request.args.get('owner_id')
    if owner_id:
        pets = [pet for pet in pets if str(pet.get('owner_id')) == owner_id]
    return jsonify(pets)

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
