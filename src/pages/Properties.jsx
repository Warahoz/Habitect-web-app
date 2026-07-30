import { Link } from "react-router-dom";
import { useProperties } from "../context/PropertiesContext";
import PropertyGrid from "../components/PropertyGrid";

function Properties() {
  const { properties } = useProperties();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">All Properties</h1>
          <p className="text-slate-500 mt-1">Browse through our exclusive residential catalog.</p>
        </div>

        <Link
          to="/saved-properties"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg transition shadow-sm"
        >
          Saved Properties
        </Link>
      </div>

      <PropertyGrid properties={properties} />
    </section>
  );
}

export default Properties;