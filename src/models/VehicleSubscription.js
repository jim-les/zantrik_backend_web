const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Vehicle = require('./Vehicle');
const Subscription = require('./Subscription');

const VehicleSubscription = sequelize.define('VehicleSubscription', {
    vehicle_subscription_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    subscription_date: DataTypes.DATE,
    day: DataTypes.STRING(20),
    status: DataTypes.ENUM('done', 'not_done')
});

VehicleSubscription.belongsTo(Vehicle);
VehicleSubscription.belongsTo(Subscription);

module.exports = VehicleSubscription;
