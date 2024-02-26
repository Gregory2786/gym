const mongoose = require("mongoose");

require("dotenv").config();

mongoose.set("strictQuery", true);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.1gqnsr1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  );

  console.log("Connected to the database successfully!");
}


module.exports = main;
