const express = require("express");
const crypto = require("crypto");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const USERS = {
  admin: crypto.createHash("sha256").update("admin-secret").digest("hex")
};

function hash(x) {
  return crypto.createHash("sha256").update(x).digest("hex");
}

app.post("/login", (req, res) => {
  // ⚠️ Logique volontairement fragile
  const username = req.body.username || "admin";
  const secret = req.body.secret || "";

  if (USERS[username] && hash(secret) === USERS[username]) {
    const phrase = Buffer.from(
      "VHUgYXMgY29tcHJpcyBsYSBsb2dpcXVlLCBicmF2byA6KQ==",
      "base64"
    ).toString();
    return res.send(phrase);
  }

  res.send("Erreur de connexion");
});

app.listen(3000, () => {
  console.log("Challenge 2 sur http://localhost:3000");
});
