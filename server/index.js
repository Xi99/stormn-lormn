const express = require("express");
const cors = require("cors");
const pgdb = require("./db/db.js"); //.default;
const bp = require("body-parser");

const app = express();
const port = 8080;

app.use(cors());
app.use(bp.json());
// app.get(req, res) ...

app.get("/", (req, res) => {
  res.send("<h1>Storm'n Lorm'n</h1>");
});

app.get("/users", (req, res) => {
  pgdb.getAllUsers().then((results) => res.send(results));
});

app.post("/users", (req, res) => {
  pgdb.addUser(req.body).then(res.sendStatus(201));
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
