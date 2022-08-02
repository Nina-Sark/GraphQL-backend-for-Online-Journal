const { AuthenticationError, HttpQueryError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const JournalServices = require("../services/JournalServices");

const createJournalController = async (_, { input }, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { _id } = req.user;

  try {
    const journal = await JournalServices.createJournal({
      ...input,
      creator: _id,
    });
    return journal;
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = createJournalController;
