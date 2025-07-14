import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#fea434]">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
          Logout
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button onClick={() => navigate("/admin/blog")} className="bg-white p-6 rounded shadow hover:shadow-md">
          ✍️ Manage Blog Posts
        </button>
        <button onClick={() => navigate("/admin/events")} className="bg-white p-6 rounded shadow hover:shadow-md">
          📆 Manage News & Events
        </button>
        <button onClick={() => navigate("/admin/newsletter")} className="bg-white p-6 rounded shadow hover:shadow-md">
          📰 Manage Newsletter
        </button>
      </div>
    </div>
  );
};

export default AdminPanel;
