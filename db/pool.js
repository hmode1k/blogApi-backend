const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "yousef",
  database: "blog",
  password: "yy123",
  port: 5432,
});
