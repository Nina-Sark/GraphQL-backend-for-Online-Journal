const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthService {
  static async emailInUse(email) {
    const userExists = await User.exists({ email });
    if (userExists) return true;
    return false;
  }

  static hashPassword(password) {
    return bcrypt.hashSync(password, 10);
  }

  static createJWT(payload) {
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });

    return token;
  }

  static async createUser({ email, password, username }) {
    const hashedPassword = this.hashPassword(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      username,
    });
    const token = this.createJWT({ id: newUser?._id, email: newUser?.email });

    return {
      id: newUser?._id,
      username: newUser?.username,
      email: newUser?.email,
      photoURL: newUser?.photoURL,
      emailValid: newUser?.emailValid,
      theme: newUser?.theme,
      token,
    };
  }

  static async findUserByEmailAndPincode(email, pincode) {
    const user = await User.findOne({ email, pincode });
    return user;
  }

  static async validateUserEmail(email) {
    const user = await User.findOneAndUpdate(
      { email },
      { emailValid: true, pincode: 0 },
      { new: true }
    );
    return user;
  }

  static verifyToken(token) {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
  }

  static async getUserByEmail(email) {
    const user = await User.findOne({ email });
    return user;
  }

  static async setPincode(email, pincode) {
    await User.findOneAndUpdate({ email }, { pincode }, { new: true });
  }

  static comparePassword(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
  }
}

module.exports = AuthService;
