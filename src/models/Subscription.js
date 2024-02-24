const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Subscription = sequelize.define('Subscription', {
    subscription_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subscription_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true // You can set it to false if description is required
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    category: { // New attribute
        type: DataTypes.STRING(50), // Adjust data type and length as needed
        allowNull: true // Set to false if category is required
    }
});

module.exports = Subscription;
