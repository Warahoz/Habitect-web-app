import React from "react";
import AdminSidebar from "../components/AdminSidebar";

export default function AddProperty() {
  return (
    <div className="flex h-screen w-screen bg-slate-100 overflow-hidden">
      {/* Sidebar now sits naturally on the left */}
      <AdminSidebar />

      {/* Main Content Area automatically takes up the exact remaining space */}
      <div className="flex-1 h-screen overflow-y-auto p-8">
        <div className="max-w-4xl bg-white p-8 rounded-xl shadow-md border border-slate-200">
          <h1 className="text-2xl font-bold text-slate-800 mb-6">
            Add New Property
          </h1>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Property Title</label>
                <input type="text" placeholder="e.g. Modern Villa" className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">City / Location</label>
                <input type="text" placeholder="e.g. Nairobi" className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Price ($)</label>
                <input type="number" placeholder="1250000" className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Listing Status</label>
                <select className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
                  <option>For Sale</option>
                  <option>For Rent</option>
                  <option>Pending</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Bedrooms</label>
                <input type="number" placeholder="4" className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Bathrooms</label>
                <input type="number" placeholder="3" className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Image URL</label>
              <input type="text" placeholder="https://images.unsplash.com/..." className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 uppercase mb-2">Description</label>
              <textarea rows="4" placeholder="Enter description..." className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            </div>

            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg transition">
              Save Property
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}