const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DATABASE_URI:
    process.env.NODE_ENV === "test"
      ? process.env.TEST_URI
      : process.env.DATABASE_URI
};
