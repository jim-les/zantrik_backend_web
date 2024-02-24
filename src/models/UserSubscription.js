const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Subscription = require('./Subscription');

const UserSubscription = sequelize.define('UserSubscription', {
    user_subscription_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
});

UserSubscription.belongsTo(User);
UserSubscription.belongsTo(Subscription);

module.exports = UserSubscription;
