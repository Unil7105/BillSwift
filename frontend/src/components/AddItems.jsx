import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddItems = () => {
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/add');
  };

  return (
    <div className="flex justify-end mt-10 w-[90%] gap-7">
      <button
        onClick={handleAddClick}
        className="px-4 text-xl py-3 rounded-lg border border-gray-300 font-bold cursor-pointer 
                   transition-all duration-300 [&:hover]:bg-gray-900 [&:hover]:text-white"
      >
        Add
      </button>
    </div>
  );
};

export default AddItems;
