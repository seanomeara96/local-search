import request from "supertest";
import app from "../../app";
import * as URL from "../urls/user-urls";
it("responds with a 201 if user sucessfully registered", async () => {
  await request(app)
    .post(URL.RegisterUser)
    .send({
      username: "seanomeara96",
      email: "valid@email.com",
      password: "Strong.password1",
    })
    .expect(201);
});
it("responds with a 400 if you fail to provide a username", async () => {
  await request(app)
    .post(URL.RegisterUser)
    .send({
      email: "valid@secondemail.com",
      password: "Strong.password1",
    })
    .expect(400);
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
