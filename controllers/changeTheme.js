const { AuthenticationError, HttpQueryError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const UserServices = require("../services/UserServices");

const changeThemeController = async (_, { theme }, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { email } = req.user;

  try {
    await UserServices.updateTheme(email, theme);
    return { success: true, message: "Theme successfuly updated." };
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = changeThemeController;
