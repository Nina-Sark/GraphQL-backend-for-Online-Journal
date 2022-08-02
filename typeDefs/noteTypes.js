const { gql } = require("apollo-server-express");

const noteTypes = gql`
  input createNoteInput {
    content: String!
    color: String
  }

  input updateNoteInput {
    id: ID!
    content: String!
  }

  type Note implements INote {
    id: ID!
    content: String!
    color: String!
    user: ID!
    createdAt: String!
    updatedAt: String!
  }

  type NoteArrayItem implements INote {
    id: ID!
    content: String!
    color: String!
    user: ID!
    date: Date!
  }

  type NoteItem {
    _id: Int!
    notes: [NoteArrayItem]
  }
`;

module.exports = noteTypes;
