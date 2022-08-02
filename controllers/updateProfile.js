const { AuthenticationError, HttpQueryError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const UserServices = require("../services/UserServices");

const updateProfileController = async (_, { input }, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { email } = req.user;

  try {
    await UserServices.updateUser(email, input);
    return { success: true, message: "Profile successfuly updated." };
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = updateProfileController;