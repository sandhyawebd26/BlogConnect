// routes/checkoutRoutes.js
const express = require('express');
const router = express.Router();
const checkoutController = require('../Controllers/checkoutController');

router.post('/api/create-checkout-session', checkoutController.createCheckoutSession);

module.exports = router;

