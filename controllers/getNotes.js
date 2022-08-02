const { AuthenticationError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const Note = require("../models/Note");
const NoteServices = require("../services/NoteServices");
const groupByDate = require("../utils/groupByDate");

const getNotesController = async (_, __, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { _id } = req.user;

  const notes = await groupByDate(
    Note,
    {
      content: 1,
      color: 1,
      user: 1,
    },
    "notes",
    {
      content: "$content",
      color: "$color",
      user: "$user",
    }
  );

  return NoteServices.filterByUser(_id, notes);
};

module.exports = getNotesController;