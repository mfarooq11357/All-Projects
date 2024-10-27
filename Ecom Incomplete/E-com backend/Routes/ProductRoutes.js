
const express = require('express');
const router = express.Router();
const Product = require('../models/ProductModel');
const User = require('../models/UserModel');
const Order = require('../models/OrderModel');
const { jwtAuthMiddleware } = require('../Middlewares/Auth');

const checkAdminRole = async (userID) => {
    try {
        const user = await User.findById(userID);
        if (user && user.role === 'admin') {
            return true;
        }
    } catch (err) {
        console.error(err); // Optional: Log the error for debugging
    }
    return false; // Explicitly return false if the user is not an admin
};

// GET all products with filtering and sorting
router.get('/all', async (req, res) => {
    try {
        const { category, sort, minPrice, maxPrice } = req.query;

        let filter = {};

        if (category) {
            filter.category = category;
        }
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = minPrice;
            if (maxPrice) filter.price.$lte = maxPrice;
        }


        let productsQuery = Product.find(filter);
        productsQuery = productsQuery.sort({ createdAt: -1 });
        if (sort) {
            if (sort === 'priceLowHigh') {
                productsQuery = productsQuery.sort({ price: 1 }); // Sort by price ascending
            } else if (sort === 'priceHighLow') {
                productsQuery = productsQuery.sort({ price: -1 }); // Sort by price descending
            }
        }

        const products = await productsQuery.exec();
        res.status(200).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET a specific product by ID
router.get('/product/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST route to place an order
router.post('/placeorder', jwtAuthMiddleware, async (req, res) => {
    try {
        const { products } = req.body; // Expecting an array of product objects with { productId, quantity }

        if (!products || !Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ error: 'Products are required' });
        }

        // Verify if each product exists and validate quantities
        for (const item of products) {
            const product = await Product.findById(item.productId);
            if (!product) {
                return res.status(404).json({ error: `Product with ID ${item.productId} not found` });
            }
            if (item.quantity <= 0) {
                return res.status(400).json({ error: `Invalid quantity for product with ID ${item.productId}` });
            }
            if (item.quantity > product.quantity) {
                return res.status(400).json({ error: `Not enough stock for product with ID ${item.productId}` });
            }
        }

        // Create the order
        const order = new Order({
            user: req.user.id, // Assuming user ID is available from authentication middleware
            products: products.map(item => ({
                product: item.productId,
                quantity: item.quantity
            }))
        });

        // Save the order
        const savedOrder = await order.save();

        // Update product stock
        for (const item of products) {
            await Product.findByIdAndUpdate(item.productId, {
                $inc: { quantity: -item.quantity }
            });
        }

        res.status(201).json(savedOrder);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// GET route to fetch orders for the authenticated user
//check krny wala rehta hai 
router.get('/my-orders', jwtAuthMiddleware, async (req, res) => {
    try {
        // Retrieve user ID from the authenticated request
        const userId = req.user._id;

        // Fetch orders for the authenticated user
        const orders = await Order.find({ user: userId })
            .populate('products.product', 'name price') // Optionally populate product details
            .populate('user', 'name email'); // Optionally populate user details

        // Send response
        res.status(200).json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


























// GET route to fetch all orders (admin Only)
router.get('/allorders', jwtAuthMiddleware, async (req, res) => {
    try {
        if (!(await checkAdminRole(req.user.id))) {
            return res.status(403).json({ message: 'User does not have admin role' });
        }

        // Fetch all orders
        const orders = await Order.find().populate('user', 'name email').populate('products.product', 'name price');

        // Send response
        res.status(200).json(orders);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
// PUT route to update the status of an order
router.put('/orders/:id', jwtAuthMiddleware, async (req, res) => {
    try {
        if (!(await checkAdminRole(req.user.id))) {
            return res.status(403).json({ message: 'User does not have admin role' });
        }

        const { status } = req.body;

        // Validate the provided status
        if (!['processing', 'shipped', 'delivered','cancelled'].includes(status)) {
            return res.status(400).json({ error: 'Invalid status' });
        }

        // Find and update the order
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status: status },
            { new: true } // Return the updated document
        );

        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }

        // Send response
        res.status(200).json(order);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// POST a new product (Admin only)
router.post('/uploadProduct', jwtAuthMiddleware, async (req, res) => {
    try {
        if (!(await checkAdminRole(req.user.id))) {
            return res.status(403).json({ message: 'User does not have admin role' });
        }
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT update an existing product by ID (Admin only)
router.put('/:id', jwtAuthMiddleware, async (req, res) => {
    try {
        if (!(await checkAdminRole(req.user.id))) {
            return res.status(403).json({ message: 'User does not have admin role' });
        }
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(updatedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// DELETE a product by ID (Admin only)
router.delete('/:id', jwtAuthMiddleware, async (req, res) => {
    try {
        if (!(await checkAdminRole(req.user.id))) {
            return res.status(403).json({ message: 'User does not have admin role' });
        }
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;














