// routes/subscriptionRoutes.js

const express = require('express');
const router = express.Router();
const orderContoller = require('../controllers/orderController');

router.get('/', orderContoller.getOrder);
// POST create a new subscription
router.post('/', orderContoller.createOrder);

module.exports = router;