let serviceCollection = require("../db").db("Famulis").collection("Services");
class Service {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }
}

module.exports = Service;
