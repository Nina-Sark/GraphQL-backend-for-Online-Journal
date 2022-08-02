const { Schema, SchemaTypes, model } = require("mongoose");

const JournalSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      required: true,
      enum: ["sad", "frustrated", "fine", "miserable", "happy"],
    },
    creator: {
      type: SchemaTypes.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Journal = model("journals", JournalSchema);

module.exports = Journal;
