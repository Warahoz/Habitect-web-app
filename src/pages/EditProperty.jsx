import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import { useProperties } from "../context/PropertiesContext";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getProperty, updateProperty } = useProperties();

  const [form, setForm] = useState({
    title: "",
    city: "",
    state: "",
    price: "",
    type: "",
    status: "For Sale",
    beds: "",
    baths: "",
    sqft: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const property = getProperty(id);

    if (property) {
      setForm({
        title: property.title || "",
        city: property.city || "",
        state: property.state || "",
        price: property.price || "",
        type: property.type || "",
        status: property.status || "For Sale",
        beds: property.beds || "",
        baths: property.baths || "",
        sqft: property.sqft || "",
        description: property.description || "",
        image: property.images?.[0] || "",
      });
    }
  }, [id]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateProperty({
      id,
      title: form.title,
      city: form.city,
      state: form.state,
      price: Number(form.price),
      type: form.type,
      status: form.status,
      beds: Number(form.beds),
      baths: Number(form.baths),
      sqft: Number(form.sqft),
      description: form.description,
      featured: false,
      images: [form.image],
    });

    navigate("/admin/properties");
  };

export default function EditProperty() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          Edit Property
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow grid md:grid-cols-2 gap-5"
        >
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Title"
          />

          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="City"
          />

          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="State"
          />

          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Price"
          />

          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Property Type"
          />
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>

          <input
            name="beds"
            value={form.beds}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Bedrooms"
          />

          <input
            name="baths"
            value={form.baths}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Bathrooms"
          />

          <input
            name="sqft"
            value={form.sqft}
            onChange={handleChange}
            className="border p-3 rounded"
            placeholder="Area (sq ft)"
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="border p-3 rounded md:col-span-2"
            placeholder="Image URL"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="5"
            className="border p-3 rounded md:col-span-2"
            placeholder="Description"
          />

          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded md:col-span-2"
          >
            Update Property
          </h1>

          <form className="space-y-6">
            {/* 2-Column Grid for Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                  Property Title
                </label>
                <input
                  type="text"
                  defaultValue="Malibu Villa"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 box-border"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                  City / Location
                </label>
                <input
                  type="text"
                  defaultValue="Malibu"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 box-border"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                  Price ($)
                </label>
                <input
                  type="number"
                  defaultValue="1250000"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 box-border"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                  Listing Status
                </label>
                <select 
                  defaultValue="For Sale" 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white box-border"
                >
                  <option>For Sale</option>
                  <option>For Rent</option>
                  <option>Pending</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                  Bedrooms
                </label>
                <input
                  type="number"
                  defaultValue="4"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 box-border"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                  Bathrooms
                </label>
                <input
                  type="number"
                  defaultValue="3"
                  className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 box-border"
                />
              </div>
            </div>

            {/* Full Width Input Fields */}
            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                Image URL
              </label>
              <input
                type="text"
                defaultValue="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 box-border"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2">
                Description
              </label>
              <textarea
                rows="4"
                defaultValue="Luxury estate with uninterrupted ocean views, walnut floors throughout, and a chef's kitchen built for entertaining."
                className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 box-border"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition"
            >
              Update Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}