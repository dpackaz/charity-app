const { gql } = require("apollo-server-express");

//TODO: create typeDefs
const typeDefs = gql`
  type Dummy {
    _id: ID
    name: String
  }

  type Auth {
    token: ID
    user: User
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    friends: [User]
  }

  type Query {
    showDummy: [Dummy]
  }

  type Mutation {
    signup(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
