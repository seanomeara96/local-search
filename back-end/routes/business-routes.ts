import express from "express";
import * as Business from "../controllers/business-controller";
import * as URL from "./urls/business-urls";
const router = express.Router();
// register a business
router.post(URL.RegisterBusinessURL, Business.register);
// delete a business
router.post(
  URL.DeleteBusinessURL,
  Business.isClientAdmin,
  Business.isResourceOwner,
  Business.remove
);
// login as business admin
router.post(URL.BusinessLoginURL, Business.login);
// logout as business admin
router.post(URL.BusinessLogoutURL, Business.isClientAdmin, Business.logout);
// check if business name exists
router.post(URL.DoesBusinessUsernameExistURL, Business.doesNameExist);
// check if business email exists
router.post(URL.DoesBusinessEmailExistURL, Business.doesEmailExist);

export default router;
