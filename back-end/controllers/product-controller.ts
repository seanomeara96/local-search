import Product from "../models/Product.js";
import { Request, Response } from "express";
// Adds product to the database
export const createProduct = function (req: Request, res: Response) {
  console.log("create product");
};
export const updateProduct = function (req: Request, res: Response) {
  console.log("update product");
};
export const deleteProduct = function (req: Request, res: Response) {
  console.log("delete product");
};
// Gets page for single product
export const viewSingleProduct = function (req: Request, res: Response) {
  console.log("view single product");
};
export const viewAllProducts = function (req: Request, res: Response) {
  console.log("view all product");
};
