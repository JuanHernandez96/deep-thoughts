// import the gql tagged template funciton
const { gql } = require('apollo-server-express');

// create our type defs 
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  friendCount: Int
  thoughts: [Thought]
  friends: [User]
}

type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
}

type Reaction {
  _id: ID
  reactionBody: String
  createdAt: String
  username: String
}

type Query {
  users: [User]
  user(username: String!): User
  thoughts(username: String): [Thought]
  thought(_id: ID!): Thought
  }`;
// thoughts query with a parameter username with data string 
// export the type defs 
module.exports = typeDefs;