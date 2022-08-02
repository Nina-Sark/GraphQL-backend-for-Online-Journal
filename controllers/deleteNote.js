const { AuthenticationError, HttpQueryError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const BinServices = require("../services/BinServices");
const NoteServices = require("../services/NoteServices");

const deleteNoteController = async (_, { id }, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { _id } = req.user;

  try {
    const note = await NoteServices.removeNote(id);
    await BinServices.addIntoBin(_id, "note", note);
    return note;
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = deleteNoteController;
