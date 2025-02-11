import React, { useState } from "react";
import SlideBar from "../components/SlideBar";
import Search from "../components/Search";
import Table from "../components/Table";
import Print from "../components/Print";
import AddItems from "../components/AddItems";
import SearchResultsList from "../components/SearchResultsList";


const HomePage = () => {

  const [results, setResults] = useState([])

  return (
    <div>
      <div className="flex">
        <SlideBar />
        <div className="ml-10 w-[100%]">
          <Search setResults={setResults} />
          <SearchResultsList results={results} />
          <Table />
          <div className="">
            <AddItems />
          </div>
          <Print />
        </div>
      </div>
    </div>
  );
};

export default HomePage;