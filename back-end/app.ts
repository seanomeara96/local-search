import express from "express";
import connect from "./db";
import router from "./router";
const app = express();
app.listen(process.env.PORT!, () => {
  console.log("Starting application...");
  connect()
    .then(() => {
      app.use(express.urlencoded({ extended: false }));
      app.use(express.json());
      app.use(router);
    })
    .catch(() => {
      console.log("Something went wrong...");
    });
});

export default app;
