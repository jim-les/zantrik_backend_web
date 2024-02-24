const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Order = sequelize.define('Order', {
    order_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_name: {
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
    }
});

Order.belongsTo(User);
module.exports = Order;
