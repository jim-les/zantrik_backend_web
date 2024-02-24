// Garage.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const GarageServices = require('./GarageServices');

const Garage = sequelize.define('Garage', {
    Garage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Garage_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    discount: {
        type: DataTypes.STRING,
        allowNull: true
    },
    location: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    opening: { 
        type: DataTypes.STRING(50), 
        allowNull: true 
    },
    closing: { 
        type: DataTypes.STRING(50), 
        allowNull: true 
    },
    distance: { 
        type: DataTypes.STRING(50), 
        allowNull: true 
    }
});

Garage.associate = function(models) {
    Garage.hasMany(models.GarageServices, { foreignKey: 'garageId', as: 'services' });
};
  

module.exports = Garage;
