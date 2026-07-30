from extensions import ma
from marshmallow import fields


class UserSchema(ma.Schema):
    id = fields.Integer(dump_only=True)

    username = fields.String(required=True)

    email = fields.Email(required=True)

    role = fields.String()

    created_at = fields.DateTime()


user_schema = UserSchema()

users_schema = UserSchema(many=True)