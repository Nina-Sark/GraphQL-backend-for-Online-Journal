const { gql } = require("apollo-server-express");

const authTypes = gql`
  input createUserInput {
    email: String!
    password: String!
    username: String!
  }

  input loginUserInput {
    email: String!
    password: String!
  }

  input validateEmailInput {
    pincode: Int!
  }

  type SuccessOutput implements ISuccessOutput {
    success: Boolean!
    message: String!
  }

  type User implements IUser {
    id: ID!
    username: String!
    email: String!
    photoURL: String!
    emailValid: Boolean!
    theme: String!
    token: String!
  }
`;

module.exports = authTypes;
