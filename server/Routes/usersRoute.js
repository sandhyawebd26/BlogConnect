const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth")
const usersController = require("../Controllers/userController");

router.get("/users",authMiddleware, usersController.getAllUsers);
router.get("/users/:id",authMiddleware, usersController.getUserById);
router.put("/users/:id", authMiddleware,usersController.updateUser);
router.delete("/users/:id", authMiddleware, usersController.deleteUser);

module.exports = router;
