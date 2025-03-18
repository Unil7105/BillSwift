import React, { useState } from "react";
import SlideBar from "../components/SlideBar";
import SearchItem from "../components/SearchItem";
import Table from "../components/Table";

const BillPage = () => {
  const [items, setItems] = useState([]);

  // Function to add items from search
  const addItem = (item) => {
    // Generate a temporary ID for new items
    const newItem = {
      _id: Date.now().toString(), // Temporary ID for newly added items
      itemCode: item.itemCode || "N/A",
      product: item.product,
      quantity: item.quantity || 1,
      mrp: item.mrp || 0,
      netamt: (item.quantity || 1) * (item.mrp || 0)
    };
    
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <div>
      <div className="flex">
        <SlideBar />
        <div className="w-[100%] flex flex-col items-center">
          <div className="relative w-full">
            <SearchItem onItemSelect={addItem} />
          </div>
          <Table items={items} setItems={setItems} />
          <div className="flex justify-end mt-10 w-[90%] gap-7">
            <button className="px-3 text-[15px] p-3 rounded-[7px] border border-gray-300 font-bold transition-all duration-300 [&:hover]:bg-gray-900 [&:hover]:text-white">
              Print
            </button>
            <div className="border text-[15px] p-3 bg-gray-900 text-white rounded-[10px]">
              Total: {items.reduce((sum, item) => sum + (item?.netamt || 0), 0).toLocaleString()} Rs
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillPage;