import React, { useEffect, useState } from "react";
import { HiPencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import EditItemsModal from "./EditItemsModal";
import AddItemsModal from "./AddItemsModal"; // Import if you need to add items from the table
import axios from "axios";

const Table = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); // Add this if you need the add button
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [items, setItems] = useState([]);

  const handleDeleteClick = (itemId) => {
    // Confirm before deleting
    if (window.confirm('Are you sure you want to delete this item?')) {
      axios
        .delete(`http://localhost:5001/deleteItem/${itemId}`)
        .then(() => {
          // After successful deletion, refresh the items list
          fetchItems();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleEditClick = (itemId) => {
    setSelectedItemId(itemId);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedItemId(null);
    // Refresh items after editing
    fetchItems();
  };

  const handleAddClick = () => {
    setShowAddModal(true);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    // Refresh items after adding
    fetchItems();
  };

  // Function to refresh items after editing
  const fetchItems = () => {
    axios
      .get("http://localhost:5001")
      .then((result) => setItems(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <div className="mt-10 w-[90%] overflow-hidden rounded-lg shadow-lg border border-gray-300 text-[12px]">
        {/* Add button if needed */}
        {/* <div className="flex justify-end p-4">
          <button 
            onClick={handleAddClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add New Item
          </button>
        </div> */}

        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-white text-black">
              <th className="border border-gray-300 px-6 py-3 rounded-tl-lg">
                No
              </th>
              <th className="border border-gray-300 px-6 py-3">Item Code</th>
              <th className="border border-gray-300 px-6 py-3">Product</th>
              <th className="border border-gray-300 px-6 py-3">Quantity</th>
              <th className="border border-gray-300 px-6 py-3">MRP</th>
              <th className="border border-gray-300 px-6 py-3 rounded-tr-lg">
                Net Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {items && items.length > 0 ? (
              items.map((i, index) => (
                <tr
                  key={index}
                  className="bg-white text-black even:bg-gray-100 text-center"
                >
                  <td className="border border-gray-300 px-6 py-3 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-6 py-3">
                    {i.itemCode}
                  </td>
                  <td className="border border-gray-300 px-6 py-3">
                    {i.product}
                  </td>

                  <td className="border border-gray-300 px-6 py-3 text-center cursor-pointer group">
                    <div className="flex items-center justify-center space-x-2">
                      <HiPencilAlt
                        onClick={() => handleEditClick(i._id)}
                        className="text-xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {i.quantity}
                    </div>
                  </td>

                  <td className="border border-gray-300 px-6 py-3 text-center cursor-pointer group">
                    <div className="flex items-center justify-center space-x-2">
                      <HiPencilAlt
                        onClick={() => handleEditClick(i._id)}
                        className="text-xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                      {i.mrp}
                    </div>
                  </td>

                  <td className="border border-gray-300 px-6 py-3 text-center cursor-pointer group">
                    <div className="flex items-center justify-center space-x-2">
                      {i.netamt}
                      <MdDelete 
                        onClick={() => handleDeleteClick(i._id)}
                        className="text-xl cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
        {/* Edit Modal */}
        <EditItemsModal 
          isOpen={showEditModal} 
          onClose={handleCloseEditModal} 
          itemId={selectedItemId} 
        />

        {/* Add Modal */}
        <AddItemsModal 
          isOpen={showAddModal} 
          onClose={handleCloseAddModal} 
          onItemAdded={fetchItems}
        />
      </div>
    </>
  );
};

export default Table;