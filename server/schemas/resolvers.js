// Use the Dabble model
const DabbleModel = require("../models");

const resolvers = {
  Query: {
    selectDabble: async () => {
      return await DabbleModel.find({});
    },
  },
};
module.exports = resolvers;
