from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os
from urllib.parse import unquote

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

    required_fields = ['name', 'race', 'age', 'gender', 'notes']
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
    return jsonify(pets)

@app.route('/')
def index():
    return "API para gerir pets - Hotel Bicho Solto"


@app.route('/api/pets/<name>', methods=['GET'])
def get_pet_by_name(name):
    pets = load_pets()
    decoded_name = unquote(name).strip().lower()
    
    for pet in pets:
        if pet['name'].strip().lower() == decoded_name:
            return jsonify(pet)
    
    return jsonify({'error': 'Pet não encontrado'}), 404

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

    required_fields = ['type', 'animals', 'age', 'description']
    missing_fields = [field for field in required_fields if field not in data or not data[field]]

    if missing_fields:
        return jsonify({'error': f'Campos em falta: {", ".join(missing_fields)}'}), 400

    services = load_services()
    services.append(data)
    save_services(services)

    return jsonify({'message': 'Serviço adicionado com sucesso!'}), 201

#--------------------------------------------------------------------------------------------------------
PET_TAKERS_FILE = 'PetTakers.json'

def load_pet_takers():
    if os.path.exists(PET_TAKERS_FILE):
        with open(PET_TAKERS_FILE, 'r') as f:
            return json.load(f)
    return []

@app.route('/api/PetTakers', methods=['GET'])
def get_pet_takers():
    pet_takers = load_pet_takers()
    return jsonify(pet_takers)


if __name__ == '__main__':
    app.run(debug=True)
