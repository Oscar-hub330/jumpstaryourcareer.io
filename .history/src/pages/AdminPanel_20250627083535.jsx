import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded hover:shadow-md cursor-pointer">
          <h2 className="text-xl font-semibold">Manage Blog Posts</h2>
          <p className="text-sm text-gray-600">Add, edit, or delete blog articles.</p>
        </div>
        <div className="bg-white p-6 shadow rounded hover:shadow-md cursor-pointer">
          <h2 className="text-xl font-semibold">Manage News & Events</h2>
          <p className="text-sm text-gray-600">Keep your community updated.</p>
        </div>
        <div className="bg-white p-6 shadow rounded hover:shadow-md cursor-pointer">
          <h2 className="text-xl font-semibold">Send Newsletters</h2>
          <p className="text-sm text-gray-600">Create and send email updates.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
