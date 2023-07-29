const { BadRequestError } = require("../errors");

const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError("Test User cannot perform such tasks!");
  }
  next();
};

module.exports = testUser;
