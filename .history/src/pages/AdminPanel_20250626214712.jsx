import React from "react";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const nav = useNavigate();
  return (
    <div className="min-h-screen p-8">
      <button onClick={() => { localStorage.removeItem("isAdmin"); nav("/"); }}>
        Logout
      </button>
      <h1 className="text-3xl font-bold text-[#fea434]">Admin Dashboard</h1>
      {/* additional admin UI */}
    </div>
  );
};

export default AdminPanel;
