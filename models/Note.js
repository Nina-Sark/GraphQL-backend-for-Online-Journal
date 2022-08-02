const { Schema, SchemaTypes, model } = require("mongoose");

const NoteSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#F7DC6F",
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Note = model("notes", NoteSchema);

module.exports = Note;