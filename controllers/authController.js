const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../db/queries");

async function signUp(req, res) {
  const { username, email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  // insert stuff into db
  const { rows } = await db.signUpUser(username, email, hashedPass);
  const token = jwt.sign({ id: rows[0].id }, process.env.JWT_SECRET);
  res.json({ token, user: rows[0] });
}

module.exports = { signUp };
