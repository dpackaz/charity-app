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
    charityID: String
    name: String
    mission: String
    address: String
    website_Url: String
    pledge_Url: String
    logo_Url: String
  }

  input CharityInput {
    charityID: String
    name: String
    mission: String
    address: String
    website_Url: String
    pledge_Url: String
    logo_Url: String
  }

  type Drive {
    _id: ID
    organizer: User
    charity: Charity
    goal: Int
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    charities: [Charity]
    driveMe(id: ID!): Drive
    driveAll: [Drive]
    charity(id: String): Charity
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
    saveCharity(newCharity: CharityInput): Charity
    updateUser(id: ID!, email: String, password: String): User
    addDrive(userId: ID!, charityId: String!, goal: Int!): Drive
    updateDrive(id: ID!, charity: CharityInput!, goal: Int!): Drive
  }
`;
//TODO: Modifify updateUser to be more flexible
// words
//TODO: updateDrive to update User and change Goal

module.exports = typeDefs;
