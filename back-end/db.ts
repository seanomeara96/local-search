import mongodb from "mongodb";
export let client;
/**
 * mongodb.connect(
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

 */
const connect = function () {
  return new Promise(async (resolve, reject) => {
    try {
      client = await mongodb.connect(process.env.CONNECTIONSTRING, {
        useUnifiedTopology: true,
      });
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

export default connect;
