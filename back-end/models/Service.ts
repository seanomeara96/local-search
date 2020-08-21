let serviceCollection = require("../db").db("Famulis").collection("Services");
class Service {
  data: any;
  errors: string[];
  constructor(data) {
    this.data = data;
    this.errors = [];
  }
}

export default Service;
