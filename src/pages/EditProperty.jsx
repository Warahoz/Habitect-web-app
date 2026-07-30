import React from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function EditProperty() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <AdminSidebar />

      {/* Main Content Area - Offsets fixed sidebar and bounds remaining screen width */}
      <div 
        style={{ marginLeft: "256px", width: "calc(100vw - 256px)" }} 
        className="p-8 min-h-screen overflow-y-auto box-border"
      >
        <div className="max-w-4xl bg-white p-8 rounded-xl shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-800 mb-6">
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