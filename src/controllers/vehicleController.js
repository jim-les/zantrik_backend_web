// controllers/vehicleController.js
const Vehicle = require('../models/Vehicle');

exports.addVehicle = async (req, res) => {
  try {
    const newVehicle = await Vehicle.create(req.body);
    res.status(201).json(newVehicle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};