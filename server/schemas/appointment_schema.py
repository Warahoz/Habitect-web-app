from extensions import ma
from models.appointment import Appointment

class AppointmentSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Appointment
        load_instance = True
        include_fk = True

appointment_schema = AppointmentSchema()
appointments_schema = AppointmentSchema(many=True)