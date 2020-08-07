let followsCollection = require("../db").db("Famulis").collection("Follows");
const User = require("./User");
let Follow = function (followedBusinessName, followerId) {
  this.followedBusinessName = followedBusinessName;
  this.followerId = followerId;
  this.errors = [];
};
module.exports = Follow;
