const { gql } = require("apollo-server-express");

const interfaces = gql`
  interface ISuccessOutput {
    success: Boolean!
    message: String!
  }

  interface IUser {
    id: ID!
    username: String!
    email: String!
    photoURL: String!
    emailValid: Boolean!
    theme: String!
  }

  interface IJournal {
    id: ID!
    title: String!
    content: String!
    mood: MOOD!
    creator: ID!
  }

  interface INote {
    id: ID!
    content: String!
    color: String!
    user: ID!
  }
`;

module.exports = interfaces;
