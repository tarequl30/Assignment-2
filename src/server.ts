import config from "./app/config";
import app from "./app";
import mongoose from "mongoose";
const bodyParser = require("body-parser");

app.use(bodyParser.json());

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
