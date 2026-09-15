const { Router } = require("express");
const postsController = require("../controllers/postsController");
const { commentsRouter } = require("./commentsRouter");

const postsRouter = Router();

postsRouter.get("/", postsController.getAllPosts); //get all posts
postsRouter.post("/", postsController.addPost); // add a new post
postsRouter.get("/:id", postsController.getPost); //get specific post
postsRouter.get("/:id/delete", postsController.deletePost); // delete specific post
postsRouter.use("/postId/", commentsRouter);

module.exports = { postsRouter };
