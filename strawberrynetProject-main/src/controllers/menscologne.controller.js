const express = require("express");
const router = express.Router();
const Menscologne = require("../models/menscologne.model");
router.get("/", async (req, res) => {
  try {
    const menscolognepproducts = await Menscologne.find().lean().exec();
    return res.status(200).json({ menscolognepproducts });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});

module.exports = router;
