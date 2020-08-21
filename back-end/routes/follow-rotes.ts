//Follow related routes
import { addFollow, removeFollow } from "../controllers/follow-controller";
import { mustBeLoggedIn } from "../controllers/user-controller";

import express from "express";
const router = express.Router();

router.post("/follow/:businessId/create", mustBeLoggedIn, addFollow);
router.post("/follow/:businessId/delete", mustBeLoggedIn, removeFollow);

export default router;
