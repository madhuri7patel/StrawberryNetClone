const {Schema,model} = require("mongoose")

const mongoose = require("mongoose")

const trackproductSchema = new Schema({

     name:{ type: String,required: true},
        product_id:{ 
            type:mongoose.Schema.Types.ObjectId,
            ref:"cart",
            required: true
        }
    
},{
    versionKey:false,
    timestamps:true
})


module.exports = model("trackpage",trackproductSchema)