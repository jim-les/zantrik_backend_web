const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Driver = sequelize.define('Driver', {
    driver_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    driver_name: DataTypes.STRING(100)
});

Driver.belongsTo(User);

module.exports = Driver;
