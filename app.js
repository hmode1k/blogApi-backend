const express = require("express");
const { postsRouter } = require("./routes/postsRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use("/posts", postsRouter);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, console.log("App listening on port 3000"));
