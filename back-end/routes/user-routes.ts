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
const router = express.Router();
// register a user
router.post("/register", registerUser);
// logs a user in
router.post("/login", userLogin);
// checks username availability
router.post("/doesUsernameExist", doesUsernameExist);
// checks email availability
router.post("/doesEmailExist", doesEmailExist);
// ends user's session
router.post("/logout", mustBeLoggedIn, userLogout);
export default router;
