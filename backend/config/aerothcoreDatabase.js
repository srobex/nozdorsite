// backend/config/aerothcoreDatabase.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const aerothcoreSequelize = new Sequelize(
  process.env.AEROTHCORE_DB_NAME,
  process.env.AEROTHCORE_DB_USER,
  process.env.AEROTHCORE_DB_PASSWORD,
  {
    host: process.env.AEROTHCORE_DB_HOST,
    dialect: 'mariadb',
    logging: false,
  }
);

module.exports = aerothcoreSequelize;