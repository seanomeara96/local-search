// User related routes
import {
  registerUser,
  userLogin,
  userLogout,
  mustBeLoggedIn,
  doesEmailExist,
  doesUsernameExist,
} from "../controllers/user-controller";
import express from "express";
import {
  DoesEmailExistURL,
  DoesUsernameExistURL,
  LoginURL,
  LogoutURL,
  RegisterURL,
} from "./URLS/UserUrls";
const router = express.Router();
// register a user
router.post(RegisterURL, registerUser);
// logs a user in
router.post(LoginURL, userLogin);
// checks username availability
router.post(DoesUsernameExistURL, doesUsernameExist);
// checks email availability
router.post(DoesEmailExistURL, doesEmailExist);
// ends user's session
router.post(LogoutURL, mustBeLoggedIn, userLogout);
export default router;
