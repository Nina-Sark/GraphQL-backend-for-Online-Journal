const { Schema, SchemaTypes, model } = require("mongoose");

const BinSchema = new Schema(
  {
    type: {
      type: String,
      enum: ["journal", "note"],
    },
    item: {},
    user: {
      type: SchemaTypes.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const Bin = model("bins", BinSchema);

module.exports = Bin;
