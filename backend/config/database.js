// backend/config/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: '127.0.0.1',
  dialect: 'mariadb',
  logging: false,
});

module.exports = sequelize;