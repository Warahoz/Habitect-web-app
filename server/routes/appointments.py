from flask import Blueprint, request, jsonify
from extensions import db
from models.appointment import Appointment

appointments_bp = Blueprint('appointments', __name__, url_prefix='/appointments')

@appointments_bp.route('', methods=['GET'])
def get_appointments():
    appointments = Appointment.query.all()
    return jsonify([appt.to_dict() for appt in appointments]), 200

@appointments_bp.route('', methods=['POST'])
def create_appointment():
    data = request.get_json()
    if not data or not all(k in data for k in ('user_id', 'property_id', 'date', 'time')):
        return jsonify({'error': 'Missing required fields'}), 400

    new_appt = Appointment(
        user_id=data['user_id'],
        property_id=data['property_id'],
        date=data['date'],
        time=data['time'],
        status=data.get('status', 'Pending')
    )
    db.session.add(new_appt)
    db.session.commit()
    return jsonify(new_appt.to_dict()), 201

@appointments_bp.route('/<int:id>', methods=['PUT'])
def update_appointment(id):
    appt = Appointment.query.get_or_404(id)
    data = request.get_json()
    
    if 'status' in data:
        appt.status = data['status']
    if 'date' in data:
        appt.date = data['date']
    if 'time' in data:
        appt.time = data['time']

    db.session.commit()
    return jsonify(appt.to_dict()), 200

@appointments_bp.route('/<int:id>', methods=['DELETE'])
def delete_appointment(id):
    appt = Appointment.query.get_or_404(id)
    db.session.delete(appt)
    db.session.commit()
    return jsonify({'message': 'Appointment cancelled successfully'}), 200