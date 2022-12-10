const { gql } = require("apollo-server-express");

//TODO: create typeDefs
const typeDefs = gql`
  type Dummy {
    _id: ID
    name: String
  }

  type Query {
    showDummy: [Dummy]
  }
`;

module.exports = typeDefs;
