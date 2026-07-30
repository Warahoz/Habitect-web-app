from extensions import db
from datetime import datetime

class SavedProperty(db.Model):
    __tablename__ = 'saved_properties'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    property_id = db.Column(db.Integer, db.ForeignKey('properties.id'), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    user = db.relationship('User', backref='saved_properties')
    property = db.relationship('Property', backref='saved_by_users')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'property_id': self.property_id,
            'property': self.property.to_dict() if self.property else None,
            'created_at': self.created_at.isoformat() if self.created_at else None
        }