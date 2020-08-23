import { productsCollection } from "../db";
import BusinessResource from "./BusinessResource";
class Product extends BusinessResource {
  collection = productsCollection;
}
export default Product;
