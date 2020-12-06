import express from "express";
import * as Product from "../controllers/product-controller";
import * as URL from "./urls/product-urls";
import {
  isClientAdmin,
  isResourceOwner,
} from "../controllers/business-controller";
const router = express.Router();
// Administrative
// Add a product
router.post(URL.createProduct, isClientAdmin, Product.createProduct);

// Update a product
router.post(
  URL.updateProduct,
  isClientAdmin,
  isResourceOwner,
  Product.updateProduct
);

// Delete a product
router.post(
  URL.deleteProduct,
  isClientAdmin,
  isResourceOwner,
  Product.deleteProduct
);

// Non-Administrative
router.get(URL.viewAllProducts, Product.viewAllProducts);
router.get(URL.viewSingleProduct, Product.viewSingleProduct);
export default router;
