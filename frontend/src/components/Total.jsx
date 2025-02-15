import React, { useEffect, useState } from "react";

const Total = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const fetchAmt = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/items");
      if (!res.ok) throw new Error("Failed to fetch data");

      const data = await res.json();
      if (data.items) {
        setItems(data.items);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAmt();
  }, []); // Fetches data on mount

  useEffect(() => {
    // Calculate total amount whenever items change
    const newTotal = items.reduce((sum, item) => sum + (item?.netamt || 0), 0);
    setTotal(newTotal);
    console.log("Fetched Items:", items); // Debug log
    console.log("Total Calculated:", newTotal); // Debug log
  }, [items]);

  return (
    <div className="flex justify-end mt-10 w-[90%] gap-7">
      <button className="px-3 text-[20px] p-3 rounded-[7px] border border-gray-300 font-bold transition-all duration-300 [&:hover]:bg-gray-900 [&:hover]:text-white">
        Print
      </button>
      <div className="border text-[20px] p-3 bg-gray-900 text-white rounded-[10px]">
        Total: {total.toLocaleString()} Rs
      </div>
    </div>
  );
};

export default Total;
