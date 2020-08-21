const Business = require("../models/Business.js");

// Directs them to their business dashboard
exports.isBusinessAdmin = function (req, res, next) {
  // authenticates user as a business user
  console.log("is BusinessAdmin");
  next();
};
// Authenticates user is owner of a resource
exports.isResourceOwner = function (req, res, next) {
  console.log("is resource owner");
  next()
}
// Logs them into their business account
exports.login = function (req, res) {
  console.log("business login");
};

// Logs business user out
exports.logout = function (req, res) {
  console.log("business logout");
};

// registers a business
exports.register = function (req, res) {
  console.log("business register");
  res.json({status: "success"})
};
exports.delete = function (req, res) {
  console.log("delete a business")
}
// Checks if business name is taken
exports.doesBusinessNameExist = function (req, res) {
  console.log("does Business name exist");
};

// Checks is business email is taken
exports.doesBusinessEmailExist = function (req, res) {
  console.log("does business email exist");
};
