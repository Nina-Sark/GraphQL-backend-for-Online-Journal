const { AuthenticationError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");

const logoutController = (_, __, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));

  req.headers.authentication = null;
  req.user = null;

  return {
    success: true,
    message: "Successful logout.",
  };
};

module.exports = logoutController;