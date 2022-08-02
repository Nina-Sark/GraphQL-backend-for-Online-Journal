const createJournalController = require("../controllers/createJournal");
const deleteJournalController = require("../controllers/deleteJournal");
const getJournalsController = require("../controllers/getJournals");

const JournalResolver = {
  Query: {
    getJournals: getJournalsController,
  },
  Mutation: {
    createJournal: createJournalController,
    deleteJournal: deleteJournalController,
  },
};

module.exports = JournalResolver;
