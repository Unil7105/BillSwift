import React, { useState } from "react";
import SlideBar from "../components/SlideBar";
import Search from "../components/Search";
import Table from "../components/Table";
import AddItems from "../components/AddItems";
import SearchResultsList from "../components/SearchResultsList";
import Total from "../components/Total";

const InventoryPage = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <div className="flex">
        <SlideBar />
        <div className="w-[100%] flex flex-col items-center">
          <Search setResults={setResults} />
          <SearchResultsList results={results} />
          <Table />
          <AddItems />
          <Total />
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
