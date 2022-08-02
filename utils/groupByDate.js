const groupByDate = async (Model, fieldsToInclude, arrayName, arrayFields) => {
  const data = await Model.aggregate([
    {
      $project: {
        _id: 1,
        createdAt: 1,
        year: { $year: "$createdAt" },
        month: { $month: "$createdAt" },
        dayOfMonth: { $dayOfMonth: "$createdAt" },
        dayOfWeek: { $dayOfWeek: "$createdAt" },
        ...fieldsToInclude,
      },
    },
    {
      $match: {
        year: { $lte: new Date().getFullYear() },
      },
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
    {
      $group: {
        _id: "$year",
        [arrayName]: {
          $push: {
            id: "$_id",
            ...arrayFields,
            date: {
              year: "$year",
              month: "$month",
              dayOfMonth: "$dayOfMonth",
              dayOfWeek: "$dayOfWeek",
            },
          },
        },
      },
    },
  ]);

  return data;
};

module.exports = groupByDate;
