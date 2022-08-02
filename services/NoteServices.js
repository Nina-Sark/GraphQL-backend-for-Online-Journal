const Note = require("../models/Note");

class NoteServices {
  static async createNote(data) {
    const note = await Note.create(data);

    return {
      id: note?._id,
      content: note?.content,
      color: note?.color,
      user: note?.user,
      createdAt: note?.createdAt,
      updatedAt: note?.updatedAt,
    };
  }

  static async updateNote(id, content) {
    const note = await Note.findOneAndUpdate(
      { _id: id },
      { content },
      { new: true }
    );

    return {
      id: note?._id,
      content: note?.content,
      color: note?.color,
      user: note?.user,
      createdAt: note?.createdAt,
      updatedAt: note?.updatedAt,
    };
  }

  static filterByUser(id, notes) {
    return notes.map((note) => {
      return {
        ...note,
        notes: note.notes.filter((j) => j.user == id),
      };
    });
  }

  static async removeNote(noteId) {
    const note = await Note.findByIdAndDelete(noteId);
    return note;
  }
}

module.exports = NoteServices;
