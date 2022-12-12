const { gql } = require("apollo-server-express");

//TODO: create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    friends: [User]
  }

  type Charity {
    _id: ID
    name: String
    mission: String
    location: String
    website: String
  }

  type Drive {
    _id: ID
    organizer: User
    charity: Charity
    goal: Int
  }
`;

module.exports = typeDefs;
