import { productsCollection } from "../db";
class Product {
  data: any;
  errors: string[];
  constructor(data: any) {
    this.data = data;
    this.errors = [];
  }
}

export default Product;
