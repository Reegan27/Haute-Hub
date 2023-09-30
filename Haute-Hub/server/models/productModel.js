const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    // user_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:[true],
    //     ref:"User"
    // },
    name:{
        type:String,
        required:[true,"Please enter product name"]
    },
    desc:{
        type:String,
        required:[true,"Please enter product description"]
    },
    price:{
        type:String,
        required:[true,"Please enter price"]
    },
    imgUrl:{
        type:String,
        required:[true,"Please gnter ImageUrl"]
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Product",productSchema);