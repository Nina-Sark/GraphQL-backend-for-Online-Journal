const { Schema, SchemaTypes, model } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  photoURL: {
    type: String,
    default: "",
  },
  pincode: {
    type: Number,
    default: 000000,
  },
  emailValid: {
    type: Boolean,
    default: false,
  },
  theme: {
    type: String,
    default: "default",
    enum: [
      "default",
      "bloom",
      "city park",
      "classic",
      "classroom",
      "electric",
      "executive",
      "frontier",
      "highrise",
      "innovate",
      "solar",
      "storm",
      "sunset",
      "tidal",
    ],
  },
});

const User = model("users", UserSchema);

module.exports = User;
