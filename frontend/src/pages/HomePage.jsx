import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to BillSwift</h1>
      <p className="text-lg mb-4">Manage your billing efficiently.</p>
      <button
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg transition"
        onClick={() => navigate("/inventory")}
      >
        Inventory
      </button>
    </div>
  );
};

export default HomePage;
