const express = require("express");
const router = express.Router();
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const authController = require("../Controllers/Auth/authController");

const registerSchema = Joi.object({
  email: Joi.string().email().required().label("email"),
  password: Joi.string().min(3).max(15).required().label("password"),
  name: Joi.string().required().label("fullname"),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .label("confirm password")
    .messages({
      "any.only": "Passwords do not match",
    }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(3).max(15).required(),
});

//create user
router.post(
  "/register",
  validator.body(registerSchema),
  authController.postRegister
);

router.post("/login", validator.body(loginSchema), authController.postLogin);

module.exports = router;
