const { gql } = require("apollo-server-micro");

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }

  type Query {
    viewer: User
  }
`;

module.exports = typeDefs;
