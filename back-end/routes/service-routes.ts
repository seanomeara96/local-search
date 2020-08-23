// Service related routes
import {
  createService,
  updateService,
  deleteService,
  viewAllServices,
  viewSingleService,
} from "../controllers/service-controller";
import {
  isBusinessAdmin,
  isResourceOwner,
} from "../controllers/business-controller";
import express from "express";
const router = express.Router();
// Administrative

// Add a service
router.post("/service", isBusinessAdmin, createService);

// Update a service
router.post(
  "/service/:serviceId/update",
  isBusinessAdmin,
  isResourceOwner,
  updateService
);

// Delete a service
router.post(
  "/service/:serviceId/delete",
  isBusinessAdmin,
  isResourceOwner,
  deleteService
);

// Non-Administrative
router.get("/:businessId/services", viewAllServices);
router.get("/service/:serviceId", viewSingleService);

export default router;
