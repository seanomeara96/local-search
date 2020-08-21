const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();
// User related routes
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/doesUsernameExist", userController.doesUsernameExist);
router.post("/doesEmailExist", userController.doesEmailExist);
router.post("/logout", userController.mustBeLoggedIn, userController.logout);
module.exports = router;
