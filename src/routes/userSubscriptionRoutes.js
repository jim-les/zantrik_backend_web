const express = require('express');
const router = express.Router();
const userSubscriptionController = require('../controllers/userSubscriptionController');

// Create a new user-subscription association
router.post('/', userSubscriptionController.createUserSubscription);
router.get('/', userSubscriptionController.getUserSubscriptions);

module.exports = router;
