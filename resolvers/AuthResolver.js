const createUserControllers = require("../controllers/createUser");
const getPincodeController = require("../controllers/getPincode");
const loginUserController = require("../controllers/loginUser");
const logoutController = require("../controllers/logout");
const validateEmailController = require("../controllers/validateEmail");

const AuthResolver = {
  Query: {
    getPincode: getPincodeController,
    logout: logoutController,
  },
  Mutation: {
    createUser: createUserControllers,
    validateEmail: validateEmailController,
    loginUser: loginUserController,
  },
};

module.exports = AuthResolver;
