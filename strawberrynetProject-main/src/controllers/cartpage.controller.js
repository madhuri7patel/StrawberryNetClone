const Cart = require("../models/cartpage.model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cartitem = await Cart.find().lean().exec();
    return res.status(200).json({ cartitem });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.post("/", async (req, res) => {
  try {
    const cartitem = await Cart.create(req.body);
    return res.status(200).json({ cartitem });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const cartitem = await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json({ cartitem });
  } catch (e) {
    return res.status(500).json({ message: e.message, Status: "Failed" });
  }
});
module.exports = router;
