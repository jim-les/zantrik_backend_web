const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Define your login and signup routes here
router.post('/sendOTP', authController.sendOTP);
router.post('/verifyOTP', authController.verifyOTP);

module.exports = router;
