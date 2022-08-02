const BinItemResolver = {
  BIN_ITEM: {
    __resolveType(obj) {
      if (obj?.title) {
        return "Journal";
      }

      if (obj?.color) {
        return "Note";
      }

      return null;
    },
  },
};

module.exports = BinItemResolver;
