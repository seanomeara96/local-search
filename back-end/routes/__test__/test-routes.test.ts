import request from "supertest";
import app from "../../app";
it("responds with 200 when a post request is made to /test", async () => {
  request(app).post("/test").send({}).expect(200);
});
