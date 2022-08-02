const { AuthenticationError, HttpQueryError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const BinServices = require("../services/BinServices");
const JournalServices = require("../services/JournalServices");

const deleteJournalController = async (_, { id }, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { _id } = req.user;

  try {
    const journal = await JournalServices.removeJournal(id);
    await BinServices.addIntoBin(_id, "journal", journal);
    return { success: true, message: "Journal successfuly deleted." };
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = deleteJournalController;
