import express from "express";
import * as Follow from "../controllers/follow-controller";
import * as URL from "./urls/follow-urls";
import { mustBeLoggedIn } from "../controllers/user-controller";
const router = express.Router();
// creates relationship
router.post(URL.CreateFollow, mustBeLoggedIn, Follow.addFollow);
// destroys relationship
router.post(URL.RemoveFollow, mustBeLoggedIn, Follow.removeFollow);

export default router;
