import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [u, setU] = useState("");
  const [p, setP] = useState("");
  const nav = useNavigate();

  const handle = (e) => {
    e.preventDefault();
    if (u === "admin" && p === "admin123") {
      localStorage.setItem("isAdmin", "true");
      nav("/admin");
    } else alert("Invalid");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handle} className="bg-white p-8 shadow rounded">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <input placeholder="Username" value={u} onChange={e => setU(e.target.value)} className="mb-2 p-2 border w-full"/>
        <input placeholder="Password" type="password" value={p} onChange={e => setP(e.target.value)} className="mb-4 p-2 border w-full"/>
        <button type="submit" className="bg-[#fea434] text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
