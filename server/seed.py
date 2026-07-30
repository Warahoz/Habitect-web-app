from app import app
from extensions import db
from models.user import User

with app.app_context():

    db.drop_all()
    db.create_all()

    admin = User(
        username="admin",
        email="admin@habitect.com",
        role="admin"
    )

    admin.set_password("admin123")

    db.session.add(admin)

    db.session.commit()

    print("Database seeded successfully.")