const deleteBinController = require("../controllers/deleteBin");
const getBinsController = require("../controllers/getBins");

const BinResolver = {
  Query: {
    getBins: getBinsController,
  },
  Mutation: {
    deleteBin: deleteBinController,
  },
};

module.exports = BinResolver;
