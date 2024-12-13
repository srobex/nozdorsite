// backend/routes/characterRoutes.js
const express = require('express');
const router = express.Router();
const characterController = require('../controllers/characterController');

router.get('/:id', characterController.getCharacter);

module.exports = router;

router.get('/user/:id', characterController.getUserCharacters);
