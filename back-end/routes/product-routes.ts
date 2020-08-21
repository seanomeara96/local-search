// Product related routes
const productController = require("../controllers/productController");
const businessController = require("../controllers/businessController");
const express = require("express");
const router = express.Router();
// Administrative

// Add a product
router.post(
  "/product",
  businessController.isBusinessAdmin,
  productController.create
);

// Update a product
router.patch(
  "/product/:productId",
  businessController.isBusinessAdmin,
  businessController.isResourceOwner,
  productController.update
);

// Delete a product
router.delete(
  "/product/:productId",
  businessController.isBusinessAdmin,
  businessController.isResourceOwner,
  productController.delete
);

// Non-Administrative
router.get("/:businessId/products", productController.viewAll);
router.get("/:businessId/product/:productId", productController.viewSingle);

module.exports = router;
