from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from extensions import db
from models.user import User
from schemas.user_schema import user_schema

users_bp = Blueprint("users", __name__)


@users_bp.route("/profile", methods=["GET"])
@jwt_required()
def profile():

    user_id = get_jwt_identity()

    user = User.query.get(user_id)

    return user_schema.jsonify(user)


@users_bp.route("/profile", methods=["PUT"])
@jwt_required()
def update_profile():

    user_id = get_jwt_identity()

    user = User.query.get(user_id)

    data = request.get_json()

    user.username = data.get("username", user.username)
    user.email = data.get("email", user.email)

    db.session.commit()

    return user_schema.jsonify(user)