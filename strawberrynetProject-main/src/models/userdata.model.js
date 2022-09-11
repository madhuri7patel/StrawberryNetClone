const { Schema, model } = require("mongoose");
const userdataSchema = new Schema(
  {
    title: { type: String },
    price: { type: String },
    rating: { type: Number },
    thumbnail: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("userdata", userdataSchema);
