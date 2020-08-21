import { client } from "../db";
client.db("Famulis").collection("Products");
class Product {
  data: any;
  errors: string[];
  constructor(data: any) {
    this.data = data;
    this.errors = [];
  }
}

export default Product;
