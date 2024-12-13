// backend/routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');
const authenticate = require('../middleware/authenticate');

router.get('/', newsController.getAllNews);
router.post('/', authenticate, newsController.createNews);

module.exports = router;