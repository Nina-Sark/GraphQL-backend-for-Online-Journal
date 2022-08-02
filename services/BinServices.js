const Bin = require("../models/Bin");

class BinServices {
  static async addIntoBin(user, type, item) {
    const bin = await Bin.create({ type, item, user });
    return bin;
  }

  static async getBins(user) {
    const bins = await Bin.find({ user });
    return bins.map((bin) => ({
      id: bin?._id,
      type: bin?.type,
      item: bin?.item,
      user: bin?.user,
      createdAt: bin?.createdAt,
      updatedAt: bin?.updatedAt,
    }));
  }

  static async deleteBin(binId) {
    return await Bin.findByIdAndRemove(binId);
  }
}

module.exports = BinServices;
