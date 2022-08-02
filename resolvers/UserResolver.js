const changePasswordController = require("../controllers/changePassword");
const changeThemeController = require("../controllers/changeTheme");
const getUserDataController = require("../controllers/getUserData");
const updateProfileController = require("../controllers/updateProfile");

const UserResolver = {
  Query: {
    getUserData: getUserDataController,
  },
  Mutation: {
    updateProfile: updateProfileController,
    changePassword: changePasswordController,
    changeTheme: changeThemeController,
  },
};

module.exports = UserResolver;