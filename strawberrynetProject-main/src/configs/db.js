const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://aakash:aakash123@cluster0.hurs4.mongodb.net/strawberrynet?retryWrites=true&w=majority"
  );
};
//mongodb+srv://aakash:aakash123@cluster0.hurs4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
