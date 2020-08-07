let productsCollection = require("../db").db("Famulis").collection("Products");
class Product {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }
}

module.exports = Product;
