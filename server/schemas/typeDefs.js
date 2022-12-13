const { gql } = require("apollo-server-express");

//create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    friends: [User]
  }
  input UserInput {
    _id: ID
    name: String
    email: String
  }

  type Charity {
    _id: ID
    name: String
    mission: String
    address: String
    website_Url: String
    pledge_Url: String
    logo_Url: String
  }
  input CharityInput {
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
    charity: Charity
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
    updateUser(id: ID!, email: String!, password: String!): User
    addDrive(user: UserInput!, charity: CharityInput!, goal: Int!): Drive
    updateDrive(id: ID!, charity: CharityInput!, goal: Int!): Drive
  }
`;

module.exports = typeDefs;
