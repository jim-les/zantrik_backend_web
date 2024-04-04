// controllers/garageController.js
const Garage = require('../models/Garage');

exports.getGarages = async (req, res) => {
    try {
        const garages = await Garage.findAll();
        res.status(200).json(garages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getGarageById = async (req, res) => {
    try {
        const { id } = req.params;
        const garage = await Garage.findByPk(id);
        
        if (!garage) {
            return res.status(404).json({ message: 'Garage not found' });
        }
        
        res.status(200).json(garage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createGarage = async (req, res) => {
    try {
        const { Garage_name, discount, location, opening, closing } = req.body;
        
        // Create a new garage instance
        const newGarage = await Garage.create({
        Garage_name,
        discount,
        location,
        opening,
        closing
        });

        res.status(201).json(newGarage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
