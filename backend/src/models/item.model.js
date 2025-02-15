import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemCode: { type: String, required: true, unique: true },
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  mrp: { type: Number, required: true },
  netamt: { type: Number, required: true },
});

const Item = mongoose.model("Item", itemSchema);

// Function to fetch and export netamt
export const getNetAmounts = async () => {
  try {
    const netAmounts = await Item.find({}, { netamt: 1, _id: 0 });
    return netAmounts;
  } catch (error) {
    console.error("Error fetching net amounts:", error);
    throw error;
  }
};

// Function to fetch and export itemCode
export const getItemCode = async () => {
  try {
    const itemCode = await Item.find({}, { itemCode: 1, _id: 0 });
    return itemCode;
  } catch (error) {
    console.error("Error fetching net amounts:", error);
    throw error;
  }
};

export default Item;

// Function to create an item only if it doesn't already exist
async function createItem() {
  try {
    // const existingItem = await Item.findOne({ itemCode: "XYZ123" });

    // if (existingItem) {
    //   console.log("Item with itemCode 'XYZ123' already exists.");
    //   return;
    // }

    const newItem = new Item({
      itemCode: "XYZ123",
      product: "silver",
      quantity: 4,
      mrp: 100,
      netamt: 400,
    });

    const savedItem = await newItem.save();
    console.log("Saved item:", savedItem);
  } catch (error) {
    console.error("Error saving item:", error);
  }
}

// createItem(); // Uncomment to test
