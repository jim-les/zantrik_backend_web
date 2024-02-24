// routes/driverRoutes.js
// routes/driverRoutes.js
/**
 * @swagger
 * tags:
 *   name: Drivers
 *   description: Driver management
 */

/**
 * @swagger
 * /api/drivers/hire:
 *   post:
 *     summary: Hire a driver
 *     description: Hire a new driver
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               license:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successfully hired a driver
 */
const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.post('/hire', driverController.hireDriver);

module.exports = router;