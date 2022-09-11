const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aakash:aakash123@cluster0.hurs4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})