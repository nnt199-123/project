const { default: slugify } = require('slugify')
const Product=require('../models/product')
const asyncHandler=require('express-async-handler')

const createProduct=asyncHandler(async(req,res)=>{
    if  (Object.keys(req.body).length ===0) throw new Error('Missing inputs')
    if (req.body && req.body.title) req.body.slug=slugify(req.body.title)
        const newProduct =await Product.create(req.body)
    return res.status(200).json({
        success:newProduct?true:false,
        createdProduct:newProduct?newProduct:'Cannot create new product'
    })
})


module.exports={
    createProduct,
}