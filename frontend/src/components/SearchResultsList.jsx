import React from "react";
import SearchResult from "./SearchResult";

const SearchResultsList = ({ results }) => {
  if (!results?.length) return null;

  return (
    <div className="w-[90%] bg-white border ml-15 border-gray-300 flex flex-col shadow-md max-h-[200px] overflow-y-auto scrollbar-hide">
      {results.map((result) => (
        <SearchResult result={result} key={result._id || result.itemCode} />
      ))}
    </div>
  );
};

export default SearchResultsList;
