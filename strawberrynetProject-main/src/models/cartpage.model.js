const { Schema, model } = require("mongoose");
const cartpageSchema = new Schema(
  {
    title: { type: String },
    price: { type: String },
    id: { type: String },
    thumbnail: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("cartpage", cartpageSchema);
