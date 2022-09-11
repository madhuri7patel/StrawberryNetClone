const express = require("express");
const router = express.Router();
const Haircare = require("../models/haircare.model");
router.get("/", async (req, res) => {
  try {
    const haircareproducts = await Haircare.find().lean().exec();
    return res.status(200).json({ haircareproducts });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});

module.exports = router;
