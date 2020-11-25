import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../app";
import request from "supertest";
/**
 * Before all testing is done change the process.env.db_connection_key
 * Assign a new instance of Mongomemoryserver to a global variable
 * Connect to said memory server
 */
/**
 * Before each test empty the collections in the mongodb instance
 */
/**
 * After all the tests are complete
 * stop mongodb
 * close the connection
 */
/**
 * Not a bad idea to assign a signin function to NodeJs's global object so that it is accessible from all test files
 */
let mongo: MongoMemoryServer;

beforeAll(async () => {
  mongo = new MongoMemoryServer();
  // connect
});
beforeEach(async () => {
  const collections = MongoMemoryServer;
});
afterAll(async () => {
  await mongo.stop();
  // disconnect
});
declare global {
  namespace NodeJS {
    interface Global {
      signin(): Promise<string[]>;
    }
  }
}
global.signin = async () => {
  const email = "email@email.com";
  const password = "password";
  const res = await request(app)
    .post("/api/users/signup")
    .send({ email, password })
    .expect(201);
  const cookie = res.get("Set-Cookie");
  return cookie;
};
