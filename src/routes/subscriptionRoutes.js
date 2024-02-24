// routes/subscriptionRoutes.js
/**
 * @swagger
 * tags:
 *   name: Subscriptions
 *   description: Subscription management
 */

/**
 * @swagger
 * /api/subscriptions:
 *   get:
 *     summary: Get all subscriptions
 *     description: Retrieve a list of all subscriptions
 *     responses:
 *       '200':
 *         description: A successful response with the list of subscriptions
 */
const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');

router.get('/', subscriptionController.getSubscriptions);
// POST create a new subscription
router.post('/', subscriptionController.createSubscription);

module.exports = router;