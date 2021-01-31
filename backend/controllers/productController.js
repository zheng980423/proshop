import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

//@description fetch all products
//@router Get /api/products
//@access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});
//@description fetch single product
//@router Get /api/products/:id
//@access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('product not found');
  }
});
export { getProducts, getProductById };