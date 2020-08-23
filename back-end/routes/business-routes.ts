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
// register a business
router.post("/business/register", registerBusiness);
// delete a business
router.post(
  "/business/delete",
  isBusinessAdmin,
  isResourceOwner,
  deleteBusiness
);
// login as business admin
router.post("/business/login", businessLogin);
// logout as business admin
router.post("/business/logout", isBusinessAdmin, businessLogout);
// check if business name exists
router.post("/doesBusinessNameExist", doesBusinessNameExist);
// check if business email exists
router.post("/doesBusinessEmailExist", doesBusinessEmailExist);

export default router;
