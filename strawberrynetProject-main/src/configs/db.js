const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://strawberrynet:<password>@cluster0.2mjutaz.mongodb.net/test?retryWrites=true&w=majority"
  );
};
//mongodb+srv://aakash:aakash123@cluster0.hurs4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
