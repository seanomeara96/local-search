let businessCollection = require("../db")
  .db("Famulis")
  .collection("Businesses");
class Business {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }
}
module.exports = Business;
