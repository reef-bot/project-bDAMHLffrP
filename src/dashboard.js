// File: src/dashboard.js

// Import necessary modules
const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Dashboard Route
router.get('/dashboard', dashboardController.getDashboard);
router.post('/dashboard/settings', dashboardController.updateSettings);

module.exports = router;