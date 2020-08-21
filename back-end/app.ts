import express from "express";
import connect from "./db";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.listen(process.env.port, async () => {
  console.log("starting application...");
  try {
    await connect();
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
  } catch (err) {
    console.log("Something went wrong...");
    app.close();
  }
});

export default app;
