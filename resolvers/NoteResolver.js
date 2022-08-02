const createNoteController = require("../controllers/createNote");
const deleteNoteController = require("../controllers/deleteNote");
const getNotesController = require("../controllers/getNotes");
const updateNoteController = require("../controllers/updateNote");

const NoteResolver = {
  Query: {
    getNotes: getNotesController,
  },
  Mutation: {
    createNote: createNoteController,
    updateNote: updateNoteController,
    deleteNote: deleteNoteController,
  },
};

module.exports = NoteResolver;
