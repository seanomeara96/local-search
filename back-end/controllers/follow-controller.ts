import Follow = require("../models/Follow.js");
import { Request, Response } from "express";
// Adds relationship object to database
export const addFollow = function (req: Request, res: Response) {
  console.log("add follow");
};

// Removes relationship object from database
export const removeFollow = function (req: Request, res: Response) {
  console.log("remove follow");
};
