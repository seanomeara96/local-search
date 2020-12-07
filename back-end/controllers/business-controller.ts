import Business from "../models/Business";
import { Request, Response, NextFunction } from "express";
// Directs them to their business dashboard
export const isClientAdmin = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  let isAdmin: boolean;
  // Set isAdmin to True or False
  if (isAdmin) {
    next();
  }
  // authenticates user as a business user
  console.log("is BusinessAdmin");
};
// Authenticates user is owner of a resource
export const isResourceOwner = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("is resource owner");
  next();
};
// Logs them into their business account
export const login = function (req: Request, res: Response) {
  console.log("business login");
};

// Logs business user out
export const logout = function (req: Request, res: Response) {
  console.log("business logout");
};

// registers a business
export const register = function (req: Request, res: Response) {
  console.log("business register");
  res.json({ status: "success" });
};
export const remove = function (req: Request, res: Response) {
  console.log("delete a business");
};
// Checks if business name is taken
export const doesNameExist = function (req: Request, res: Response) {
  console.log("does Business name exist");
};

// Checks is business email is taken
export const doesEmailExist = function (req: Request, res: Response) {
  console.log("does business email exist");
};
