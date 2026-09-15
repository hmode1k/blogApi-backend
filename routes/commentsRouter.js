const { Router } = require("express");
const commentsController = require("../controllers/commentsController");

const commentsRouter = Router({ mergeParams: true });

commentsRouter.get("/", commentsController.getAllComments); //get all comments for the postId
commentsRouter.post("/", commentsController.addComment); //add a new comment to the postId
commentsRouter.delete("/:commentId", commentsController.deleteComment); // delete comment

module.exports = { commentsRouter };
