// config.js
require("dotenv").config(); // loads variables from .env if it exists

const MYSQLSERVER = process.env.MYSQLSERVER || "localhost";
const MYSQLUSER = process.env.MYSQLUSER || "reactusr";
const MYSQLPASSWORD = process.env.MYSQLPASSWORD || "SqlUserP@ss1";
const MYSQLDB = process.env.MYSQLDB || "reactdb";

module.exports = {
  HOST: MYSQLSERVER,
  USER: MYSQLUSER,
  PASSWORD: MYSQLPASSWORD,
  DB: MYSQLDB,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
