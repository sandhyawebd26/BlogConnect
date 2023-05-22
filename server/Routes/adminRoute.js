const express = require('express');
const router = express.Router();
const {getAdmin, postAdmin} = require('../Controllers/adminControlller');
// const validator = require('express-joi-validation').createValidator({});
// const Joi = require('joi');
// const postAdmin = require('../Controllers/adminControlller');


router.post('/admin', postAdmin)
router.get('/admin', getAdmin )

module.exports = router;
