import { servicesCollection } from "../db";
import BusinessResource from "./BusinessResource";

class Service extends BusinessResource {
  collection = servicesCollection;
}
console.log(Service);
export default Service;
