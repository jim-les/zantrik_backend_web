// controllers/garageServicesController.js
const GarageServices = require('../models/GarageServices');

exports.getGarageServices = async (req, res) => {
    try {
        const garageServices = await GarageServices.findAll();
        res.status(200).json(garageServices);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createGarageService = async (req, res) => {
    try {
        const { GarageServices_name, Category, Points, price, offer, discount } = req.body;
        
        // Create a new garage service instance
        const newGarageService = await GarageServices.create({
        GarageServices_name,
        Category,
        Points,
        price,
        offer,
        discount
        });

        res.status(201).json(newGarageService);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
