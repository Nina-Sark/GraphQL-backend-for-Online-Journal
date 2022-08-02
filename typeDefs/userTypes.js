const { gql } = require("apollo-server-express");

const userTypes = gql`
  input updateProfileInput {
    photoURL: String
    username: String
  }

  type UserData implements IUser {
    id: ID!
    username: String!
    password: String!
    email: String!
    photoURL: String!
    emailValid: Boolean!
    theme: String!
  }

  input changePasswordInput {
    password: String!
    confirmPassword: String!
    newPassword: String!
  }
`;

module.exports = userTypes;
