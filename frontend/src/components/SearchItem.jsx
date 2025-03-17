import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchItem = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [selectedItem, setSelectedItem] = useState(-1);
  const resultsRef = useRef(null);

  useEffect(() => {
    // Reset selected item when results change
    setSelectedItem(-1);
  }, [results]);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedItem >= 0 && resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedItem];
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth"
        });
      }
    }
  }, [selectedItem]);

  const fetchData = (value) => {
    if (!value.trim()) {
      setResults([]);
      return;
    }

    fetch("http://localhost:5001/")
      .then((res) => res.json())
      .then((data) => {
        const filteredResults = data.filter((item) => {
          return item && item.product && item.product.toLowerCase().includes(value.toLowerCase());
        });
        setResults(filteredResults);
        setShowResults(true);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleResultClick = (result) => {
    setInput(result.product);
    setShowResults(false);
    alert(`You clicked ${result?.product}`);
  };

  const handleKeyDown = (e) => {
    if (!results.length) return;

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedItem((prev) => (prev <= 0 ? results.length - 1 : prev - 1));
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedItem((prev) => (prev >= results.length - 1 ? 0 : prev + 1));
    } else if (e.key === "Enter" && selectedItem >= 0) {
      e.preventDefault();
      const selectedResult = results[selectedItem];
      if (selectedResult) {
        handleResultClick(selectedResult);
      }
    } else if (e.key === "Escape") {
      setShowResults(false);
    }
  };

  return (
    <div className="relative w-full flex justify-center">
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white w-[90%] h-[35px] mt-10 gap-2">
        <FaSearch className="text-gray-500 mr-2 text-[15px]" />
        <input
          type="text"
          placeholder="Search Item"
          className="outline-none bg-transparent w-full text-[15px] text-black placeholder-gray-400"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => {
            if (input.trim() && results.length > 0) {
              setShowResults(true);
            }
          }}
          onKeyDown={handleKeyDown}
        />
      </div>

      {/* Search Results */}
      {showResults && results.length > 0 && input.trim() !== "" && (
        <div 
          ref={resultsRef}
          className="absolute top-[75px] w-[90%] bg-white border border-gray-300 flex flex-col shadow-md max-h-[200px] overflow-y-auto scrollbar-hide z-10"
        >
          {results.map((result, index) => (
            <div
              key={result._id || result.itemCode}
              onClick={() => handleResultClick(result)}
              role="button"
              tabIndex={0}
              className={
                selectedItem === index 
                  ? "p-3 bg-blue-100 font-semibold text-[13px] cursor-pointer focus:outline-none" 
                  : "p-3 active:bg-[#efefef] font-semibold text-[13px] cursor-pointer focus:outline-none focus:bg-[#e0e0e0]"
              }
            >
              {result?.product || "No Item Code"}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchItem;