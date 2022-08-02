const { UserInputError, AuthenticationError } = require("apollo-server-core");
const AuthService = require("../services/AuthService");

const loginUserController = async (_, { input }) => {
  const { email, password } = input;

  if (!email || !password) {
    return new UserInputError("Credentials are required.");
  }

  const user = await AuthService.getUserByEmail(email);

  if (!user) {
    return new AuthenticationError("Email or password is wrong.");
  }

  const isPasswordValid = AuthService.comparePassword(password, user?.password);

  if (!isPasswordValid) {
    return new UserInputError("Email or password is wrong.");
  }

  const token = AuthService.createJWT({ _id: user?._id, email: user?.email });

  return {
    id: user?._id,
    username: user?.username,
    email: user?.email,
    photoURL: user?.photoURL,
    emailValid: user?.emailValid,
    theme: user?.theme,
    token,
  };
};

module.exports = loginUserController;
