from flask import Flask
from config import Config
from extensions import (
    db,
    migrate,
    jwt,
    bcrypt,
    ma,
    cors,
)

# Import all models so Flask-Migrate & SQLAlchemy register them
from models.user import User
from models.property import Property
from models.appointment import Appointment
from models.saved_property import SavedProperty
from models.contact import ContactMessage

# Import Blueprints
from routes.auth import auth_bp
from routes.properties import properties_bp
from routes.appointments import appointments_bp
from routes.saved_properties import saved_properties_bp
from routes.contact import contact_bp


def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)
    
    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    bcrypt.init_app(app)
    ma.init_app(app)
    cors.init_app(app)

    # Register all Blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(properties_bp)
    app.register_blueprint(appointments_bp)
    app.register_blueprint(saved_properties_bp)
    app.register_blueprint(contact_bp)

    print("Registered Routes:")
    print(app.url_map)

    return app


app = create_app()


if __name__ == "__main__":
    app.run(debug=True)