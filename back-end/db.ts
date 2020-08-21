import mongodb, { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
export let client: MongoClient;
const connect = function () {
  return new Promise(async (resolve, reject) => {
    try {
      client = await mongodb.connect(process.env.CONNECTIONSTRING!, {
        useUnifiedTopology: true,
      });
      console.log("Connected to the database");
      resolve(client);
    } catch (err) {
      console.log("Something went wrong while connecting to the database");
      reject(err);
    }
  });
};

export default connect;
