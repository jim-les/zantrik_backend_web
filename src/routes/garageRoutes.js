// routes/garageRoutes.js
const express = require('express');
const router = express.Router();
const garageController = require('../controllers/garageController');

// Get all garages
router.get('/garages', garageController.getGarages);

// Create a new garage
router.post('/garages', garageController.createGarage);

module.exports = router;
