from flask import Blueprint, request, jsonify
from extensions import db
from models.saved_property import SavedProperty

saved_properties_bp = Blueprint('saved_properties', __name__, url_prefix='/saved-properties')

@saved_properties_bp.route('', methods=['GET'])
def get_saved_properties():
    user_id = request.args.get('user_id')
    if user_id:
        saved = SavedProperty.query.filter_by(user_id=user_id).all()
    else:
        saved = SavedProperty.query.all()
    return jsonify([s.to_dict() for s in saved]), 200

@saved_properties_bp.route('', methods=['POST'])
def save_property():
    data = request.get_json()
    if not data or not data.get('user_id') or not data.get('property_id'):
        return jsonify({'error': 'user_id and property_id required'}), 400

    # Prevent duplicate saves
    existing = SavedProperty.query.filter_by(
        user_id=data['user_id'], 
        property_id=data['property_id']
    ).first()
    if existing:
        return jsonify({'message': 'Property already saved'}), 200

    new_saved = SavedProperty(
        user_id=data['user_id'],
        property_id=data['property_id']
    )
    db.session.add(new_saved)
    db.session.commit()
    return jsonify(new_saved.to_dict()), 201

@saved_properties_bp.route('/<int:id>', methods=['DELETE'])
def remove_saved_property(id):
    saved = SavedProperty.query.get_or_404(id)
    db.session.delete(saved)
    db.session.commit()
    return jsonify({'message': 'Removed from saved properties'}), 200