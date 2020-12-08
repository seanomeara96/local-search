import express from "express";
import * as User from "../controllers/user-controller";
import * as URL from "./urls/user-urls";
const router = express.Router();
// register a user
router.post(URL.RegisterUser, User.register);
// logs a user in
router.post(URL.LoginUser, User.login);
// checks username availability
router.post(URL.DoesUsernameExist, User.doesUsernameExist);
// checks email availability
router.post(URL.DoesEmailExist, User.doesEmailExist);
// ends user's session
router.post(URL.LogoutUser, User.mustBeLoggedIn, User.logout);
export default router;
