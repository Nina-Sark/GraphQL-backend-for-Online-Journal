const { AuthenticationError, HttpQueryError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const BinServices = require("../services/BinServices");

const deleteBinController = async (_, { id }, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));

  try {
    await BinServices.deleteBin(id);
    return { success: true, message: "Bin successfuly removed." };
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = deleteBinController;