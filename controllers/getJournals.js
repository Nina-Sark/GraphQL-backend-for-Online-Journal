const { AuthenticationError } = require("apollo-server-core");
const isAuth = require("../middlewares/isAuth");
const Journal = require("../models/Journal");
const JournalServices = require("../services/JournalServices");
const groupByDate = require("../utils/groupByDate");

const getJournalsController = async (_, __, { req }) => {
  if (isAuth(req)) return new AuthenticationError(isAuth(req));
  const { _id } = req.user;

  const journals = await groupByDate(
    Journal,
    {
      title: 1,
      content: 1,
      mood: 1,
      creator: 1,
    },
    "journals",
    {
      title: "$title",
      content: "$content",
      creator: "$creator",
      mood: "$mood",
    }
  );

  return JournalServices.filterByUser(_id, journals);
};

module.exports = getJournalsController;
