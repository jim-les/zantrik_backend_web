// controllers/subscriptionController.js
const Subscription = require('../models/Subscription');

exports.getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.findAll();
    res.status(200).json(subscriptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createSubscription = async (req, res) => {
  try {
    const { subscription_name, description, price } = req.body;
    
    // Create a new subscription instance
    const newSubscription = await Subscription.create({
        subscription_name,
        description,
        price
    });

    res.status(201).json(newSubscription);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

