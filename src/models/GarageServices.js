// GarageServices.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Garage = require('./Garage');

const GarageServices = sequelize.define('GarageServices', {
    GarageServices_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    GarageServices_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    Category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Points: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    price: { 
        type: DataTypes.STRING(50), 
        allowNull: true 
    },
    offer: { 
        type: DataTypes.STRING(50), 
        allowNull: true 
    },
    discount: { 
        type: DataTypes.STRING(50), 
        allowNull: true 
    }
});

GarageServices.associate = function(models) {
    GarageServices.belongsTo(models.Garage, { foreignKey: 'garageId' });
};

module.exports = GarageServices;
