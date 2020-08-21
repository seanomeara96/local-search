import Service from "../models/Service.js";
import { Request, Response } from "express";

// Adds service to the database
export const createService = function (req: Request, res: Response) {
  console.log("create single service");
};
export const updateService = function (req: Request, res: Response) {
  console.log("update service");
};
export const deleteService = function (req: Request, res: Response) {
  console.log("delete service");
};
// fetch all services related to a specific business
export const viewAllServices = function (req: Request, res: Response) {
  console.log("view all of a business");
};
// Gets service for single product
export const viewSingleService = function (req: Request, res: Response) {
  console.log("view single service");
};
