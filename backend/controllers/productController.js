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

//@description delete a product
//@router Delete /api/products/:id
//@access private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: 'product Removed' });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//@description create a product
//@router Post /api/products
//@access private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'sample brrand',
    category: 'sample category',
    countInStock: 0,
    nomReviews: 0,
    description: 'sample description',
  });
  const createProduct = await product.save();
  res.status(201).json(createProduct);
});
//@description update a product
//@router PUT /api/products/:id
//@access private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;
  const product = await Product.findById(req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error('prodcut not found');
  }
});
export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
