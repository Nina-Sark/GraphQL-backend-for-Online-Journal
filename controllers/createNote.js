const { AuthenticationError, HttpQueryError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const NoteServices = require("../services/NoteServices");

const createNoteController = async (_, { input }, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { _id } = req.user;

  try {
    const note = await NoteServices.createNote({ ...input, user: _id });
    return note;
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = createNoteController;
