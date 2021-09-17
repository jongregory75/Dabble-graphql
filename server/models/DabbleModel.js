const { Schema, model } = require("mongoose");

const dabbleSchema = new Schema({
  country: {
    type: String,
  },
  year: {
    type: String,
  },
  area_square_kilometres: {
    type: Number,
  },
  total_population: {
    type: Number,
  },
});

const DabbleModel = model("DabbleModel", dabbleSchema);
module.exports = DabbleModel;
