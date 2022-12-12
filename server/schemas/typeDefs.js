const { gql } = require("apollo-server-express");

//create typeDefs
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

  type Query {
    users: [User]
    charities: [Charity]
    drive(id: ID!): Drive
  }

  type Mutation {
    addUser (name: String!, email: String!, password: String!): User
    updateUser (id: ID!, email: String!, password: String!): User
    addDrive (user: !, charity: !, goal: Int!)
    updateDrive (id: ID!, charity: !, goal: Int!)
  }
`;

module.exports = typeDefs;
