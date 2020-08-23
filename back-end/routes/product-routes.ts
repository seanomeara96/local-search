// Product related routes
import {
  createProduct,
  updateProduct,
  deleteProduct,
  viewAllProducts,
  viewSingleProduct,
} from "../controllers/product-controller";
import {
  isBusinessAdmin,
  isResourceOwner,
} from "../controllers/business-controller";

import express from "express";
const router = express.Router();
// Administrative

// Add a product
router.post("/product", isBusinessAdmin, createProduct);

// Update a product
router.post("/product/update", isBusinessAdmin, isResourceOwner, updateProduct);

// Delete a product
router.post("/product/delete", isBusinessAdmin, isResourceOwner, deleteProduct);

// Non-Administrative
router.get("/:businessId/products", viewAllProducts);
router.get("/product/:productId", viewSingleProduct);
export default router;
