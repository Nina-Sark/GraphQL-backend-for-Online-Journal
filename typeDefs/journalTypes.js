const { gql } = require("apollo-server-express");

const journalTypes = gql`
  input createJournalInput {
    title: String!
    content: String!
    mood: MOOD!
  }

  type Date {
    year: Int!
    month: Int!
    dayOfMonth: Int!
    dayOfWeek: Int!
  }

  type Journal implements IJournal {
    id: ID!
    title: String!
    content: String!
    mood: MOOD!
    creator: ID!
    createdAt: String!
    updatedAt: String!
  }

  type JournalArrayItem implements IJournal {
    id: ID!
    title: String!
    content: String!
    mood: MOOD!
    creator: ID!
    date: Date!
  }

  type JournalItem {
    _id: Int!
    journals: [JournalArrayItem]
  }
`;

module.exports = journalTypes;
