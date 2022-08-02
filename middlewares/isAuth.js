const { AuthenticationError, UserInputError } = require("apollo-server-core");
const AuthService = require("../services/AuthService");

const isAuth = (req) => {
  const token = req.headers.authentication;
  
  if (!token) {
    return new AuthenticationError("Not authenticated");
  }

  const validToken = token.split(" ")[1];

  if (!validToken) {
    return new UserInputError("Token is invalid or has expired");
  }

  const payload = AuthService.verifyToken(validToken);

  if (!payload) {
    return new AuthenticationError("Token is invalid or has expired");
  }

  req.user = payload;
};

module.exports = isAuth;
