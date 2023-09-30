const asyncHandler = require('express-async-handler');
const Product = require('../models/productModel');

const addProduct = asyncHandler(async(req,res) => {
    const{name,desc,price,imgUrl} = req.body;
    if(!name || !desc || !price || !imgUrl) {
        res.status(400)
        throw new Error("All fields are mandatory");
    }
    const product = await Product.create({
        name,
        price,
        desc,
        imgUrl
    })
    res.status(200).json(product);
})

const getProducts = asyncHandler(async(req,res) => {
    const products = await Product.find();
    res.status(200).json(products);
})


module.exports = {addProduct,getProducts}