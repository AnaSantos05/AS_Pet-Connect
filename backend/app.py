from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from urllib.parse import unquote

app = Flask(__name__)
CORS(app)

# ---------------- PETS ----------------

PETS_FILE = 'pets.json'

def load_pets():
    if os.path.exists(PETS_FILE):
        with open(PETS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def save_pets(pets):
    with open(PETS_FILE, 'w', encoding='utf-8') as f:
        json.dump(pets, f, indent=2)

@app.route('/add_pet', methods=['POST'])
def add_pet():
    data = request.get_json()
    required_fields = ['name', 'race', 'age', 'gender', 'notes']
    missing_fields = [field for field in required_fields if field not in data or data[field] == '']

    if missing_fields:
        return jsonify({'error': f'Campos em falta: {", ".join(missing_fields)}'}), 400

    data['image'] = data.get('image', '/images/logo.png')
    data['status'] = data.get('status', 'Care-Taker not assigned yet')
    data['statusColor'] = data.get('statusColor', 'red')

    pets = load_pets()
    pets.append(data)
    save_pets(pets)

    return jsonify({'message': 'Pet adicionado com sucesso!'}), 201

@app.route('/api/pets', methods=['GET'])
def get_pets():
    return jsonify(load_pets())

@app.route('/api/pets/<name>', methods=['GET'])
def get_pet_by_name(name):
    decoded_name = unquote(name).strip().lower()
    for pet in load_pets():
        if pet['name'].strip().lower() == decoded_name:
            return jsonify(pet)
    return jsonify({'error': 'Pet não encontrado'}), 404

# ---------------- SERVICES ----------------

SERVICES_FILE = 'services.json'

def load_services():
    if os.path.exists(SERVICES_FILE):
        with open(SERVICES_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def save_services(services):
    with open(SERVICES_FILE, 'w', encoding='utf-8') as f:
        json.dump(services, f, indent=2)

@app.route('/api/services', methods=['GET'])
def get_services():
    return jsonify(load_services())

@app.route('/api/services', methods=['POST'])
def add_service():
    data = request.get_json()
    required_fields = ['type', 'animals', 'age', 'description']
    missing_fields = [field for field in required_fields if field not in data or not data[field]]

    if missing_fields:
        return jsonify({'error': f'Campos em falta: {", ".join(missing_fields)}'}), 400

    services = load_services()
    services.append(data)
    save_services(services)

    return jsonify({'message': 'Serviço adicionado com sucesso!'}), 201

# ---------------- PET TAKERS ----------------

PET_TAKERS_FILE = 'pettakers.json'

def load_pet_takers():
    if os.path.exists(PET_TAKERS_FILE):
        with open(PET_TAKERS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return []

def save_pet_takers(takers):
    with open(PET_TAKERS_FILE, 'w', encoding='utf-8') as f:
        json.dump(takers, f, indent=2)

@app.route('/api/pet_takers', methods=['GET'])
def get_pet_takers():
    return jsonify(load_pet_takers())

@app.route('/api/pet_takers', methods=['POST'])
def add_pet_taker():
    data = request.get_json()
    required_fields = ['name', 'age', 'type', 'review', 'description']
    missing_fields = [field for field in required_fields if field not in data or data[field] == '']

    if missing_fields:
        return jsonify({'error': f'Campos em falta: {", ".join(missing_fields)}'}), 400

    # Normalize o campo type para minúsculas no backend
    data['type'] = data['type'].strip().lower()

    takers = load_pet_takers()
    takers.append(data)
    save_pet_takers(takers)

    return jsonify({'message': 'Pet taker adicionado com sucesso!'}), 201

# ---------------- ROOT ----------------

@app.route('/')
def index():
    return "API para gerir pets e pet takers - Hotel Bicho Solto"

# ---------------- MAIN ----------------

if __name__ == '__main__':
    app.run(debug=True)
