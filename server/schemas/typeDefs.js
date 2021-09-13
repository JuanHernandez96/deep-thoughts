// import the gql tagged template funciton
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

// export the typeDefs
module.exports = typeDefs;