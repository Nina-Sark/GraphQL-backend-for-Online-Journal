const { gql } = require("apollo-server-express");
const authTypes = require("./authTypes");
const binTypes = require("./binTypes");
const enums = require("./enums");
const interfaces = require("./interfaces");
const journalTypes = require("./journalTypes");
const noteTypes = require("./noteTypes");
const userTypes = require("./userTypes");

const typeDefs = gql`
  ${interfaces}
  ${enums}
  ${userTypes}
  ${authTypes}
  ${journalTypes}
  ${binTypes}
  ${noteTypes}

  type Query {
    getPincode: SuccessOutput
    getUserData: UserData
    logout: SuccessOutput
    getJournals: [JournalItem]
    getBins: [BinType]
    getNotes: [NoteItem]
  }

  type Mutation {
    createUser(input: createUserInput!): User
    validateEmail(input: validateEmailInput!): SuccessOutput
    loginUser(input: loginUserInput!): User
    updateProfile(input: updateProfileInput!): SuccessOutput
    changePassword(input: changePasswordInput!): SuccessOutput
    changeTheme(theme: THEME!): SuccessOutput
    createJournal(input: createJournalInput!): Journal
    deleteJournal(id: ID!): SuccessOutput
    deleteBin(id: ID!): SuccessOutput
    createNote(input: createNoteInput!): Note
    updateNote(input: updateNoteInput!): Note
    deleteNote(id: ID!): Note
  }
`;

module.exports = typeDefs;
