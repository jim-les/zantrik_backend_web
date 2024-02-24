// routes/garageServicesRoutes.js
const express = require('express');
const router = express.Router();
const garageServicesController = require('../controllers/garageServicesController');

// Get all garage services
router.get('/garage-services', garageServicesController.getGarageServices);

// Create a new garage service
router.post('/garage-services', garageServicesController.createGarageService);

module.exports = router;
