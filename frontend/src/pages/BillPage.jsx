import React from "react";
import SlideBar from "../components/SlideBar";
import SearchItem from "../components/SearchItem";
import Table from "../components/Table";
import Total from "../components/Total"

const BillPage = () => {
  return (
    <div>
      <div className="flex">
        <SlideBar />
        <div className="w-[100%] flex flex-col items-center">
          <div className="relative w-full">
            <SearchItem />
          </div>
          <Table />
          <Total />
        </div>
      </div>
    </div>
  );
};

export default BillPage;