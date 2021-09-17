const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Dabble {
    country: String
    year: String
    area_square_kilometres: Number
    total_population: Number
  }
  type Query {
    dabble: [Dabble]`;
