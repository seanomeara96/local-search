const dotenv = require("dotenv");
dotenv.config();
const mongodb = require("mongodb");
mongodb.connect(
  process.env.CONNECTIONSTRING,
  { useUnifiedTopology: true },
  (err, client) => {
    if (err) throw new Error("Database failed to connect.");
    console.log("Successful connection to database.");
    module.exports = client;
    const app = require("./app");
    app.listen(process.env.PORT, () =>
      console.log(`This application is listening on port: ${process.env.PORT}.`)
    );
  }
);
