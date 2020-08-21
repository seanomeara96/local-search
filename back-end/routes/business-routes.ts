const businessController = require("../controllers/businessController");
const express = require("express");
const router = express.Router();
// Business related routes
router.post(
  // Add a business
  "/business",
  businessController.register
);
router.delete(
  "/business/:id",
  businessController.isBusinessAdmin,
  businessController.isResourceOwner,
  businessController.delete
);
router.post("/business/login", businessController.login);
router.post(
  "/business/logout",
  businessController.isBusinessAdmin,
  businessController.logout
);
router.post("/doesBusinessNameExist", businessController.doesBusinessNameExist);
router.post(
  "/doesBusinessEmailExist",
  businessController.doesBusinessEmailExist
);

module.exports = router;
