const express = require("express");
const router = express.Router();
const Makeup = require("../models/makeupproducts.model");
router.get("/", async (req, res) => {
  try {
    const makeupproducts = await Makeup.find().lean().exec();
    //console.log(makeupproducts)
    return res.status(200).json({ makeupproducts });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});

module.exports = router;
