const Track = require('../models/trackorder.model')

const express = require('express')

const router = express.Router()

router.get("/", async (req, res) => {
    try {
      const trackitem = await Track.find().lean().exec();
      return res.status(200).json({ trackitem });
    } catch (e) {
      return res.status(500).json({ message: e.message, Status: "Failed" });
    }
  });
  router.post("/", async (req, res) => {
      try {
        const trackitem = await Track.create(req.body)
                return res.status(200).json({ trackitem });
      } catch (e) {
        return res.status(500).json({ message: e.message, Status: "Failed" });
      }
    });
  module.exports = router;