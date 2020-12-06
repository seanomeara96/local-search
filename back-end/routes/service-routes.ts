import express from "express";
import * as Service from "../controllers/service-controller";
import * as URL from "./urls/service-urls";
import {
  isClientAdmin,
  isResourceOwner,
} from "../controllers/business-controller";
const router = express.Router();
// Administrative

// Add a service
router.post(URL.createService, isClientAdmin, Service.createService);

// Update a service
router.post(
  URL.updateService,
  isClientAdmin,
  isResourceOwner,
  Service.updateService
);

// Delete a service
router.post(
  URL.removeService,
  isClientAdmin,
  isResourceOwner,
  Service.deleteService
);

// Non-Administrative
router.get(URL.viewAllServices, Service.viewAllServices);
router.get(URL.viewSingleService, Service.viewSingleService);

export default router;
