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
beforeAll(async () => {});
beforeEach(async () => {});
afterAll(async () => {});
