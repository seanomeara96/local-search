import { client } from "./db";
import { Collection } from "mongodb";

const createCollection = (collectionName: string) => (): Collection =>
  client.db("Famulis").collection(collectionName);

/*export const Users = createCollection("Users");
export const Businesses = createCollection("Businesses");
export const Follows = createCollection("Follows");
export const Products = createCollection("Products");*/
export const Services = createCollection("Services");

let list = ["Users", "Businesses", "Follows", "Products", "Services"];
console.log(Services);
console.log(list.map((collection) => createCollection(collection)));
