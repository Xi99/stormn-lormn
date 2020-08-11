const { Pool } = require("pg");
const pw = require("../../plsIgnore/dbpw.js");
const pool = new Pool({
  database: "stormn",
  user: "sean",
  password: pw.pw,
  port: 5433,
});
// use query's here

const getAllUsers = () => {
  return pool.query("SELECT * FROM users").then((res) => res.rows);
};

const addUser = (user) => {
  let values = [user.username, user.password];
  return pool
    .query("INSERT INTO users (username, password) VALUES($1, $2)", values)
    .then(() => true);
};

module.exports = {
  getAllUsers,
  addUser,
};
