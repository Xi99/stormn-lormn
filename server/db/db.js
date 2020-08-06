const { Pool } = require("pg");
const pool = new Pool({
  database: "stormn",
  user: "sean",
  password: "Dodgers12",
  port: 5433,
});
// use query's here

const getAllUsers = () => {
  console.log("In getAllUsers");
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
