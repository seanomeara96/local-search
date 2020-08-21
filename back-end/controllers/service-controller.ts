const Service = require("../models/Service.js");

// Adds service to the database
exports.create = function (req, res) {
    console.log("create single service")
};
exports.update = function (req, res) {
    console.log("update service")
}
exports.delete = function (req, res) {
    console.log("delete service")
}
// fetch all services related to a specific business
exports.viewAll = function (req, res) {
    console.log("view all of a business")
}
// Gets service for single product
exports.viewSingle = function (req, res) {
  console.log("view single service")
};

