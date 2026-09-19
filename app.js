const express = require("express");
const { postsRouter } = require("./routes/postsRouter");
const { authRouter } = require("./routes/authRouter");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/posts", postsRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, console.log("App listening on port 3000"));
