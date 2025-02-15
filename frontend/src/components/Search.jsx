import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";

const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("http://localhost:5001/api/items")
      .then((res) => res.json())
      .then((data) => {
        const results = data.items.filter((item) => {
          return item && item.itemCode && item.itemCode.toLowerCase().includes(value.toLowerCase());
        });
        setResults(results)
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white w-[90%] h-[50px] mt-10 gap-2">
      <FaSearch className="text-gray-500 mr-2 text-2xl" />
      <input
        type="text"
        placeholder="Search Bar"
        className="outline-none bg-transparent w-full text-[17px] text-black placeholder-gray-400"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
