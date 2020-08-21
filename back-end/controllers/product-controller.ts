const Product = require("../models/Product.js");

// Adds product to the database
exports.create = function (req, res) {
  console.log("create product");
};
exports.update = function (req, res) {
  console.log("update product");
};
exports.delete = function (req, res) {
  console.log("delete product")
}
// Gets page for single product
exports.viewSingle = function (req, res) {
  console.log("view single product");
};
exports.viewAll = function (req, res) {
  console.log("view all product")
}