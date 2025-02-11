import express from "express";
import { getItemCode } from "../models/item.model.js"

const router = express.Router();

router.get("/", async (req, res) => {
    try {
      const itemCode = await getItemCode();
      res.json(itemCode);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch net amounts" });
    }
  });

  export default router;