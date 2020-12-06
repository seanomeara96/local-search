import request from "supertest";
import app from "../../app";

it("responds with a 201 if user sucessfully registered", async () => {
  // stuff goes here
  /**
   * await request(app)
    .post("/")
    .send({ email: "valid@email.com", password: "Strong.password1" })
    .expect(201);
   */
});

it("responds with 200 & cookie if user sucessfully logs in", async () => {
  // stuff goes here
});

it("responds with true if usernam exitsts in database", async () => {
  // stuff goes here
});

it("responds with true if email is exists in database", async () => {
  // stuff goes here
});

it("responds 200 when session is sucessfully destroyed", async () => {
  // stuff goes here
});
