// Use the Dabble model
const { Dabble } = require("../models");

const resolvers = {
  Query: {
    dabble: async () => {
      return await Dabble.find();
    },
  },
};
module.exports = resolvers;
