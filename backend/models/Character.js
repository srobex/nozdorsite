// backend/models/Character.js
const { DataTypes } = require('sequelize');
const aerothcoreSequelize = require('../config/aerothcoreDatabase');

const Character = aerothcoreSequelize.define('Character', {
  guid: {
    type: DataTypes.BIGINT,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Другие поля по необходимости
}, {
  tableName: 'characters',
  timestamps: false,
});

module.exports = Character;