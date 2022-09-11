const express = require("express");
const router = express.Router();
const Mensskincare = require("../models/mensskincare.models");
router.get("/", async (req, res) => {
  try {
    const mensskincareproducts = await Mensskincare.find().lean().exec();
    return res.status(200).json({ mensskincareproducts });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});

module.exports = router;
