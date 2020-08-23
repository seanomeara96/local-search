//Follow related routes
import { addFollow, removeFollow } from "../controllers/follow-controller";
import { mustBeLoggedIn } from "../controllers/user-controller";

import express from "express";
const router = express.Router();
// creates relationship
router.post("/follow/create", mustBeLoggedIn, addFollow);
// destroys relationship
router.post("/follow/delete", mustBeLoggedIn, removeFollow);

export default router;
