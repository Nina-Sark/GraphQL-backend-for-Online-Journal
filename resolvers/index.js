const NoteResolver = require("./NoteResolver");
const AuthResolver = require("./AuthResolver");
const BinResolver = require("./BinResolver");
const JournalResolver = require("./JournalResolver");
const UserResolver = require("./UserResolver");
const BinItemResolver = require("./BinItemResolver");

const resolvers = {
  Query: {
    ...AuthResolver.Query,
    ...UserResolver.Query,
    ...JournalResolver.Query,
    ...BinResolver.Query,
    ...NoteResolver.Query,
  },
  Mutation: {
    ...AuthResolver.Mutation,
    ...UserResolver.Mutation,
    ...JournalResolver.Mutation,
    ...BinResolver.Mutation,
    ...NoteResolver.Mutation,
  },
  ...BinItemResolver,
};

module.exports = resolvers;
