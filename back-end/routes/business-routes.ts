// Business related routes
import {
  registerBusiness,
  isBusinessAdmin,
  isResourceOwner,
  deleteBusiness,
  businessLogin,
  businessLogout,
  doesBusinessNameExist,
  doesBusinessEmailExist,
} from "../controllers/business-controller";
import express from "express";
const router = express.Router();
router.post("/business", registerBusiness);
router.post(
  "/business/:id/delete",
  isBusinessAdmin,
  isResourceOwner,
  deleteBusiness
);
router.post("/business/login", businessLogin);
router.post("/business/logout", isBusinessAdmin, businessLogout);
router.post("/doesBusinessNameExist", doesBusinessNameExist);
router.post("/doesBusinessEmailExist", doesBusinessEmailExist);

export default router;
