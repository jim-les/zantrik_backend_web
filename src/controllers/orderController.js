// controllers/OrdersController.js
const Order = require('../models/Order');

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findAll();
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { order_name, description, price } = req.body;
    
    // Create a new subscription instance
    const newOrder = await Order.create({
        order_name,
        description,
        price
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};