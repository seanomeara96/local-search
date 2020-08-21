//Follow related routes
import { addFollow, removeFollow } from "../controllers/follow-controller";
import { mustBeLoggedIn } from "../controllers/user-controller";

const express = require("express");
const router = express.Router();

router.post("/follow/:businessId", mustBeLoggedIn, addFollow);
router.delete("/follow/:businessId", mustBeLoggedIn, removeFollow);

module.exports = router;
