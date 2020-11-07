import express from "express";
import connect from "./db";
import router from "./router";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";
const app = express();
app.listen(process.env.PORT!, () => {
  console.log("Starting application...", process.env.PORT!);
  connect()
    .then(() => {
      app.use(express.urlencoded({ extended: false }));
      app.use(express.json());
      app.use(router);
      app.all("*", async () => {
        throw new NotFoundError();
      });
      app.use(errorHandler);
    })
    .catch(() => {
      console.log("Something went wrong...");
    });
});

export default app;
