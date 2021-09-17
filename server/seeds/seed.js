const db = require("../config/connection");
const DabbleModel = require("../models");
const dabbleData = require("./dabble.json");

db.once("open", async () => {
  await DabbleModel.deleteMany();

  const insertedDabbleData = await DabbleModel.insertMany(dabbleData);

  insertedDabbleData
    ? console.log("DabbleData seeded!")
    : console.log("DabbleData error!");

  process.exit(0);
});
