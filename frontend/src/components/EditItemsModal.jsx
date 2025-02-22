import React from "react";
import Button from "./Button";

const EditItemsModal = ({ isOpen, onClose }) => {
  const MyModal = () => {
    return (
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[auto] flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Edit Your Item</h2>
            <button
              className="text-gray-500 hover:text-gray-700 text-3xl"
              onClick={onClose}
            >
              ×
            </button>
          </div>
          <form action="" className="flex gap-10">
            <input
              className="border p-3"
              type="text"
              placeholder="Enter ItemCode"
            />
            <input
              className="border p-3"
              type="text"
              placeholder="Enter Product"
            />
            <input
              className="border p-3"
              type="number"
              placeholder="Enter Quantity"
            />
            <input
              className="border p-3"
              type="number"
              placeholder="Enter Mrp"
            />
          </form>
          <Button name={"Save"} onClick={onClose} />
        </div>
      </div>
    );
  };

  return isOpen ? <MyModal /> : null;
};

export default EditItemsModal;
