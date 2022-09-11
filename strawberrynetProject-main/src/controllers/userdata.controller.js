const express = require("express");
const router = express.Router();
const Userdata = require("../models/userdata.model");
router.get("/", async (req, res) => {
  try {
    const user = await Userdata.find().lean().exec();
    return res.status(200).json({ user });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});

module.exports = router;
