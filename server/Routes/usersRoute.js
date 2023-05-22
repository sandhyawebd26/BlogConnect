const express = require("express");
const router = express.Router();
const usersController = require("../Controllers/userController");

router.get("/users", usersController.getAllUsers);
router.get("/users/:id", usersController.getUserById);
router.put("/users/:id", usersController.updateUser);
router.delete("/users/:id", usersController.deleteUser);

module.exports = router;
