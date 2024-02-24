// controllers/driverController.js
const Driver = require('../models/Driver');

exports.hireDriver = async (req, res) => {
  try {
    const newDriver = await Driver.create(req.body);
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};