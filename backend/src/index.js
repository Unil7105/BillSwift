import express from "express"
import dotenv from "dotenv"
import cors from "cors";

import itemRoutes from "./routes/items.route.js";

import { connectDB } from "./lib/db.js"

const app = express()

app.use(cors());  
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT

// Routes
app.use("/api/items", itemRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    connectDB()
})
