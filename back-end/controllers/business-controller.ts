import Business from "../models/Business";
import { Request, Response, NextFunction } from "express";
// Directs them to their business dashboard
export const isBusinessAdmin = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  // authenticates user as a business user
  console.log("is BusinessAdmin");
  next();
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
export const businessLogin = function (req: Request, res: Response) {
  console.log("business login");
};

// Logs business user out
export const businessLogout = function (req: Request, res: Response) {
  console.log("business logout");
};

// registers a business
export const registerBusiness = function (req: Request, res: Response) {
  console.log("business register");
  res.json({ status: "success" });
};
export const deleteBusiness = function (req: Request, res: Response) {
  console.log("delete a business");
};
// Checks if business name is taken
export const doesBusinessNameExist = function (req: Request, res: Response) {
  console.log("does Business name exist");
};

// Checks is business email is taken
export const doesBusinessEmailExist = function (req: Request, res: Response) {
  console.log("does business email exist");
};
