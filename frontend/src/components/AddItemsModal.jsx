import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AddItemsModal = ({ isOpen, onClose, onItemAdded }) => {
  const [itemCode, setItemCode] = useState("");
  const [quantity, setQuantity] = useState("");
  const [product, setProduct] = useState("");
  const [mrp, setMrp] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const netamt = Number(quantity) * Number(mrp);
    
    axios.post("http://localhost:5001/createItem", {
      itemCode, 
      product, 
      quantity: Number(quantity), 
      mrp: Number(mrp),
      netamt
    })
    .then(result => {
      console.log(result);
      // Call the callback function to notify parent component
      if (onItemAdded) {
        onItemAdded();
      }
      onClose();
      // Remove the navigate call as it's refreshing the whole page
      // navigate("/inventory") 
    })
    .catch(err => console.log(err));
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center text-[15px]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[auto] flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Add Your Item</h2>
          <button
            className="text-gray-500 hover:text-gray-700 text-3xl"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </div>
        
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="flex gap-10">
            <input
              className="border p-3"
              type="text"
              placeholder="Enter ItemCode"
              value={itemCode}
              onChange={(e) => setItemCode(e.target.value)}
            />
            <input
              className="border p-3"
              type="text"
              placeholder="Enter Product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
            <input
              className="border p-3"
              type="number"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              className="border p-3"
              type="number"
              placeholder="Enter Mrp"
              value={mrp}
              onChange={(e) => setMrp(e.target.value)}
            />
          </div>
          
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-end"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemsModal; 