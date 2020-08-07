const followController = require("../controllers/followController");
const userController = require("../controllers/userController");
const express = require("express");
const router = express.Router();
//Follow related routes
router.post(
  "/follow/:businessId",
  userController.mustBeLoggedIn,
  followController.addFollow
);
router.delete(
  "/follow/:businessId",
  userController.mustBeLoggedIn,
  followController.removeFollow
);
module.exports = router;
