const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Vehicle = sequelize.define('Vehicle', {
    vehicle_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vehicle_name: DataTypes.STRING(100),
    health: DataTypes.STRING(100),
    type: DataTypes.STRING(50)
});

Vehicle.belongsTo(User);

module.exports = Vehicle;

