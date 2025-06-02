from flask import Blueprint, request, jsonify
from models import db, Pet

routes = Blueprint('routes', __name__)

@routes.route('/add_pet', methods=['POST'])
def add_pet():
    data = request.get_json()
    new_pet = Pet(
        name=data['name'],
        race=data['race'],
        age=data['age'],
        notes=data.get('notes', '')
    )
    db.session.add(new_pet)
    db.session.commit()
    return jsonify({'message': 'Pet adicionado com sucesso'}), 201
