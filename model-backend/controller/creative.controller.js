const Model = require("../models/creatives.model");

const modelPortfolio = async function (req, res) {
  try {
    let {
      userId,
      profileOverview,
      stats,
      contact,
      socials,
      portfolio,
      workExp,
    } = req.body;

    if (
      !userId ||
      !profileOverview ||
      !stats ||
      !contact ||
      !socials ||
      !portfolio ||
      !workExp
    )
      return res
        .status(400)
        .json({ message: "One of the values you provided is incorrect" });

    if (
      typeof userId !== "string" ||
      typeof profileOverview !== "string" ||
      typeof stats !== "string" ||
      typeof contact !== "string" ||
      typeof socials !== "string" ||
      typeof portfolio !== "string" ||
      typeof workExp !== "string"
    )
      return res
        .status(400)
        .json({
          message:
            "One of the values you provided is invalid, it should be a string",
        });

    const model = await Model.create({
      userId,
      profileOverview,
      stats,
      contact,
      socials,
      portfolio,
      workExp,
    });

    res.status(201).json({ model });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};