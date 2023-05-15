const express = require('express');
const router = express.Router();
const adminController = require('../Controllers/adminControlller');
const validator = require('express-joi-validation').createValidator({});
const Joi = require('joi');
const postAdmin = require('../Controllers/adminControlller');


router.post('/admin', postAdmin)

module.exports = router;
