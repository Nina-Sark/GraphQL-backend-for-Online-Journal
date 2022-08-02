const {
  AuthenticationError,
  UserInputError,
  HttpQueryError,
} = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const AuthService = require("../services/AuthService");
const UserServices = require("../services/UserServices");

const changePasswordController = async (_, { input }, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { email } = req.user;
  const { password, confirmPassword, newPassword } = input;

  if (password !== confirmPassword) {
    return new UserInputError("Passwords don't match.");
  }

  const user = await AuthService.getUserByEmail(email);
  const isPasswordValid = AuthService.comparePassword(password, user?.password);

  if (!isPasswordValid) {
    return new UserInputError("Password is wrong.");
  }

  try {
    await UserServices.updatePassword(email, newPassword);
    return { success: true, message: "Password successfuly updated." };
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = changePasswordController;
