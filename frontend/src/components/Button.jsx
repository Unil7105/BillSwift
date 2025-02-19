import React from 'react';

const Button = ({ name, onClick }) => {
  return (
    <div className="flex justify-end mt-10 w-[auto] gap-7">
      <button
        onClick={onClick}  // Add this line
        className="px-4 text-xl py-3 rounded-lg border border-gray-300 font-bold cursor-pointer 
                   transition-all duration-300 [&:hover]:bg-gray-900 [&:hover]:text-white"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;