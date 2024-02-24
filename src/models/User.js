const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    phone_number: {
        type: DataTypes.STRING(20),
        unique: true
    },
    points: {
        type: DataTypes.INTEGER,
        defaultValue: 0 // Set a default value for points
    },
    email: {
        type: DataTypes.STRING, // Assuming email is a string field
        unique: true
    },
    password: {
        type: DataTypes.STRING // Assuming password is a string field
    },
});

// Sync Sequelize models with the database
sequelize.sync({ force: false }) // Set force to true to drop existing tables and re-create them (use with caution in production)
  .then(() => {
        console.log('Database synchronized');
  })
  .catch(error => {
     console.error('Error synchronizing database:', error);
});

module.exports = User;
