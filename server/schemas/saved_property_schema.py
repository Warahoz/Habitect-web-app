from extensions import ma
from models.saved_property import SavedProperty

class SavedPropertySchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = SavedProperty
        load_instance = True
        include_fk = True

saved_property_schema = SavedPropertySchema()
saved_properties_schema = SavedPropertySchema(many=True)