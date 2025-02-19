import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
// import InventoryPage from "./pages/InventoryPage";
import BillPage from "./pages/BillPage";
import InventoryPage from "./pages/InventoryPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/bill" element={<BillPage />} /> 
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
};

export default App;
