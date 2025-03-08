import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Item from "./models/item.model.js";
// import itemRoutes from "./routes/items.route.js";

import { connectDB } from "./lib/db.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT;

connectDB();

// Routes
// app.use("/api/items", itemRoutes)

app.get('/', (req, res) => {
    Item.find({})
    .then(items => res.json(items))
    .catch(err => console.log(err))
})

app.post("/createItem", (req, res) => {
  Item.create(req.body)
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
//   connectDB();
});