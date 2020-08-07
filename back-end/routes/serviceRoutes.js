// Service related routes
const serviceController = require("../controllers/serviceController");
const businessController = require("../controllers/businessController");
const express = require("express");
const router = express.Router();
// Administrative

// Add a service
router.post(
  "/service",
  businessController.isBusinessAdmin,
  serviceController.create
);

// Update a service
router.patch(
  "/service/:serviceId",
  businessController.isBusinessAdmin,
  businessController.isResourceOwner,
  serviceController.update
);

// Delete a service
router.delete(
  "/service/:serviceId",
  businessController.isBusinessAdmin,
  businessController.isResourceOwner,
  serviceController.delete
);

// Non-Administrative
router.get("/:businessId/services", serviceController.viewAll);
router.get("/:businessId/service/:serviceId", serviceController.viewSingle)

module.exports = router;
