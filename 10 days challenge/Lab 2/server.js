const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome. Try /admin");
});

app.get("/admin", (req, res) => {
  const isAdmin = req.query.admin;

  if (isAdmin === "true") {
    res.send("FLAG-1{a_dm1n_1s_n0t_a_qu3ry}");
  } else {
    res.status(403).send("Forbidden");
  }
});

app.listen(3000, () => {
  console.log("Lab 1 running on http://localhost:3000");
});
