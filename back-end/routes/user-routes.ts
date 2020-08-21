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
router.post("/register", registerUser);
router.post("/login", userLogin);
router.post("/doesUsernameExist", doesUsernameExist);
router.post("/doesEmailExist", doesEmailExist);
router.post("/logout", mustBeLoggedIn, userLogout);
export default router;
