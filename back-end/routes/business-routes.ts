import express from "express";
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

import {
  BusinessLoginURL,
  BusinessLogoutURL,
  DeleteBusinessURL,
  DoesBusinessEmailExistURL,
  DoesBusinessUsernameExistURL,
  RegisterBusinessURL,
} from "./URLS/BusinessUrls";
const router = express.Router();
// register a business
router.post(RegisterBusinessURL, registerBusiness);
// delete a business
router.post(
  DeleteBusinessURL,
  isBusinessAdmin,
  isResourceOwner,
  deleteBusiness
);
// login as business admin
router.post(BusinessLoginURL, businessLogin);
// logout as business admin
router.post(BusinessLogoutURL, isBusinessAdmin, businessLogout);
// check if business name exists
router.post(DoesBusinessUsernameExistURL, doesBusinessNameExist);
// check if business email exists
router.post(DoesBusinessEmailExistURL, doesBusinessEmailExist);

export default router;
