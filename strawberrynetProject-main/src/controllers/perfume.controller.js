const express = require("express");
const router = express.Router();
const Perfume = require("../models/perfume.model");
router.get("/", async (req, res) => {
  try {
    const perfumeproducts = await Perfume.find().lean().exec();
    return res.status(200).json({ perfumeproducts });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});

module.exports = router;
