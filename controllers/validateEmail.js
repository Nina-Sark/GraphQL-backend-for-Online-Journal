const {
  UserInputError,
  HttpQueryError,
  AuthenticationError,
} = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const AuthService = require("../services/AuthService");

const validateEmailController = async (_, { input }, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { email } = req.user;
  const { pincode } = input;
  const user = await AuthService.findUserByEmailAndPincode(email, pincode);

  if (!user) {
    return new UserInputError("Pincode is wrong.");
  }

  try {
    await AuthService.validateUserEmail(email);
    return { success: true, message: "Email successfuly validated" };
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = validateEmailController;
