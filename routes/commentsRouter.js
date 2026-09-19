const { Router } = require("express");
const commentsController = require("../controllers/commentsController");
const authMiddleware = require("../middleware/authMiddleware");

const commentsRouter = Router({ mergeParams: true });

commentsRouter.get(
  "/",
  authMiddleware.verifyToken,
  commentsController.getAllComments,
); //get all comments for the postId
commentsRouter.post(
  "/",
  authMiddleware.verifyToken,
  commentsController.addComment,
); //add a new comment to the postId
commentsRouter.delete(
  "/:commentId",
  authMiddleware,
  commentsController.deleteComment,
); // delete comment

module.exports = { commentsRouter };
