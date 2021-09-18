// import the gql tagged template funciton
const { gql } = require('apollo-server-express');

// create our type defs 
const typeDefs = gql`
type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
}
type Query {
    thoughts(username: String): [Thought]
    
  }`;
// thoughts query with a parameter username with data string 
// export the type defs 
module.exports = typeDefs;