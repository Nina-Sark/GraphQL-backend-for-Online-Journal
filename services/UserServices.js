const User = require("../models/User");
const AuthService = require("./AuthService");

class UserServices {
  static async updateUser(email, data) {
    await User.findOneAndUpdate({ email }, data, { new: true });
  }

  static async updatePassword(email, newPassword) {
    const hashedPassword = AuthService.hashPassword(newPassword);
    await User.findOneAndUpdate(
      { email },
      { password: hashedPassword },
      { new: true }
    );
  }

  static async updateTheme(email, theme) {
    await User.findOneAndUpdate({ email }, { theme }, { new: true });
  }
}

module.exports = UserServices;
