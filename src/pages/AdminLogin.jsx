import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAdminSubmit = (e) => {
    e.preventDefault();

    // When Flask backend is ready: verify credentials + check if user.is_admin
    if (email && password) {
      // Store token / admin session
      localStorage.setItem("adminToken", "sample_admin_token");
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-orange-500 tracking-wider">HABITECT</h1>
          <p className="text-slate-400 text-sm mt-1">Portal Access</p>
        </div>

        <form onSubmit={handleAdminSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Admin Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-orange-500 text-white transition"
              placeholder="admin@habitect.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:border-orange-500 text-white transition"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition shadow-lg mt-4"
          >
            Authenticate Admin
          </button>
        </form>
      </div>
    </div>
  );
}