// routes/vehicleRoutes.js

// routes/vehicleRoutes.js
/**
 * @swagger
 * tags:
 *   name: Vehicles
 *   description: Vehicle management
 */

/**
 * @swagger
 * /api/vehicles/add:
 *   post:
 *     summary: Add a new vehicle
 *     description: Add a new vehicle to the system
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vehicle_name:
 *                 type: string
 *               health:
 *                 type: string
 *               type:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Successfully added a new vehicle
 */

const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router.post('/add', vehicleController.addVehicle);

module.exports = router;
  