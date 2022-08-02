const { AuthenticationError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const AuthService = require("../services/AuthService");

const getUserDataController = async (_, __, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { email } = req.user;
  const user = await AuthService.getUserByEmail(email);

  return {
    id: user?._id,
    username: user?.username,
    email: user?.email,
    photoURL: user?.photoURL,
    emailValid: user?.emailValid,
    theme: user?.theme,
  };
};

module.exports = getUserDataController;
