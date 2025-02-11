import React from "react";
import SearchResult from "./SearchResult";

const SearchResultsList = ({results}) => {
  if (!results || results.length === 0) return null;

  return (
    <div className="w-[90%] bg-white border border-gray-300 rounded-lg flex flex-col shadow-md mt-5 max-h-[200px] overflow-y-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {
        results.map((result, id) => {
          return <SearchResult result={result} key={id} />
        })
      }
    </div>
  );
};


// jsfjalsfs
// hi nyew added
export default SearchResultsList;
