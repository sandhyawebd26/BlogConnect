const express = require('express');
const router = express.Router();
const validator = require('express-joi-validation').createValidator({});
const Joi = require('joi');
const Admin = require('../models/Admin');
const bcrypt = require("bcryptjs");
const generateAuthToken = require("../Shared/generateAuthToken");

router.post('/admin', validator.body(Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})), async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Admin.findOne({ email: email.toLowerCase() });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = generateAuthToken(user);
            return res.status(200).send({ user, token });
        }
        return res.status(400).send("Invalid credential! Please try again");
    } catch (err) {
        return res.status(500).send(err);
    }
});

module.exports = router;
