// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;

const { getMe } = require('../controllers/userController');
const authenticate = require('../middleware/authenticate');

router.get('/me', authenticate, getMe);