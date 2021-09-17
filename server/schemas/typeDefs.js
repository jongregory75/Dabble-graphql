const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type DabbleModel {
    country: String
    year: String
    area_square_kilometres: Int
    total_population: Int
  }
  type Query {
    selectDabble: [DabbleModel]
  }
`;

module.exports = typeDefs;
