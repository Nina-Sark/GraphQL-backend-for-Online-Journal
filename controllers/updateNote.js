const { AuthenticationError, HttpQueryError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const NoteServices = require("../services/NoteServices");

const updateNoteController = async (_, { input }, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { id, content } = input;

  try {
    const note = await NoteServices.updateNote(id, content);
    return note;
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = updateNoteController;
