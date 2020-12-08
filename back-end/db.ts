import mongodb, { MongoClient, Collection } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
export let client: MongoClient | undefined;
const connect = function () {
  return new Promise(async (resolve, reject) => {
    try {
      client = await mongodb.connect(process.env.CONNECTIONSTRING!, {
        useUnifiedTopology: true,
      });
      console.log("Connected to the database");
      if (client) {
        resolve(client);
      } else {
        reject("Something went wrong while connecting to the database");
      }
    } catch (err) {
      console.log("Something went wrong while connecting to the database");
      reject(err);
    }
  });
};

const createCollection = (collectionName: string) => (): Collection =>
  client!.db("Famulis").collection(collectionName);

export const usersCollection = createCollection("Users");
export const businessCollection = createCollection("Businesses");
export const followsCollection = createCollection("Follows");
export const productsCollection = createCollection("Products");
export const servicesCollection = createCollection("Services");
export default connect;
