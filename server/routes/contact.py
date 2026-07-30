from flask import Blueprint, request, jsonify
from extensions import db
from models.contact import ContactMessage

contact_bp = Blueprint('contact', __name__, url_prefix='/contact')

@contact_bp.route('', methods=['POST'])
def create_contact():
    data = request.get_json()
    if not data or not all(k in data for k in ('name', 'email', 'message')):
        return jsonify({'error': 'Name, email, and message are required'}), 400

    new_msg = ContactMessage(
        name=data['name'],
        email=data['email'],
        message=data['message']
    )
    db.session.add(new_msg)
    db.session.commit()
    return jsonify(new_msg.to_dict()), 201

@contact_bp.route('', methods=['GET'])
def get_contacts():
    messages = ContactMessage.query.all()
    return jsonify([msg.to_dict() for msg in messages]), 200