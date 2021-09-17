const { Schema, model } = require("mongoose");

const dabbleSchema = new Schema({
  country: {
    type: String,
  },
  year: {
    type: String,
  },
  area: {
    type: String,
  },
  total_population: {
    type: String,
  },
});

const Dabble = model("Dabble", dabbleSchema);

module.exports = Dabble;
