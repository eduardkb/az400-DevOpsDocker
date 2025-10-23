const MYSQLSERVER = "localhost";

module.exports = {
  HOST: MYSQLSERVER,
  USER: "reactusr",
  PASSWORD: "SqlUserP@ss1",
  DB: "reactdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
