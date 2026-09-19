const { Router } = require("express");
const postsController = require("../controllers/postsController");
const authMiddleware = require("../middleware/authMiddleware");

const { commentsRouter } = require("./commentsRouter");

const postsRouter = Router();

postsRouter.get("/", authMiddleware.verifyToken, postsController.getAllPosts); //get all posts
postsRouter.post("/", authMiddleware.verifyToken, postsController.addPost); // add a new post
postsRouter.get("/:id", authMiddleware.verifyToken, postsController.getPost); //get specific post
postsRouter.delete(
  "/:id",
  authMiddleware.verifyToken,
  postsController.deletePost,
); // delete specific post
postsRouter.use(
  "/:postId/comments",
  authMiddleware.verifyToken,
  commentsRouter,
);

module.exports = { postsRouter };
