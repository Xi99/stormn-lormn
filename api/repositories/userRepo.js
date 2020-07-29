import client from "../db/database.js";

class UserRepo {
  create(user) {
    return client.query(
      "INSERT INTO users (username, password) VALUES ($1, $2)",
      user.username,
      user.password
    );
  }

  selectAll() {
    return client.query("SELECT * FROM users ORDER BY user_id");
  }

  selectById(user_id) {
    return client.query(`SELECT * FROM users WHERE user_id = $1`, user_id);
  }
  update(user_id, user) {
    var latestUser = this.selectById(user_id);
    var query = `UPDATE users SET username = $1, password = $2`;

    return client.query(
      query,
      user.username !== undefined ? user.username : latestUser.username,
      user.password !== undefined ? user.password : latestUser.password
    );
  }
}

export default new UserRepo();
