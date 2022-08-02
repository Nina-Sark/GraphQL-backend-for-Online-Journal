const { AuthenticationError, HttpQueryError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const BinServices = require("../services/BinServices");

const getBinsController = async (_, __, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { _id } = req.user;

  try {
    const bins = await BinServices.getBins(_id);
    return bins;
  } catch (error) {
    return new HttpQueryError(error);
  }
};

module.exports = getBinsController;
