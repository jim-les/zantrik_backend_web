// src/config/config.js
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  twilio: {
    accountSid: 'ACb3b6a03473262d98b13561c930567eea',
    authToken: '46f61e637a1af5c8f4f8f650c65d78d3',
    phoneNumber: '+254113159363',
  },
};


// config/config.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('zantrik', 'admin', 'admin123', {
  host: 'zantrik.cluy0icsgtj9.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
});

module.exports = sequelize;
