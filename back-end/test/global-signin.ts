import request from "supertest";
import app from "../app";
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
