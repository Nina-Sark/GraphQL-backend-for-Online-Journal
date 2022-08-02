const { UserInputError, HttpQueryError } = require("apollo-server-core");
const AuthService = require("../services/AuthService");

const createUserControllers = async (_, { input }) => {
  const { email, password, username } = input;
  const emailInUse = await AuthService.emailInUse(email);

  if (emailInUse) {
    return new UserInputError(`Email <${email}> is already in use.`);
  }

  try {
    const newUser = await AuthService.createUser({ email, password, username });
    return newUser;
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = createUserControllers;
