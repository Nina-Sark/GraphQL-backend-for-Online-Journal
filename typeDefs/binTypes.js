const { gql } = require("apollo-server-express");

const binTypes = gql`
  union BIN_ITEM = Journal | Note

  type BinType {
    id: ID!
    type: BIN!
    item: BIN_ITEM!
    user: ID!
    createdAt: String!
    updatedAt: String!
  }
`;

module.exports = binTypes;
