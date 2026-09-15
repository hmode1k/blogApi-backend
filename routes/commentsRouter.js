const { Router } = require("express");

const commentsRouter = Router({ mergeParams: true });

commentsRouter.get("/"); //get all comments for the postId
commentsRouter.post("/"); //add a new comment to the postId
commentsRouter.delete("/:id"); // delete comment

module.exports = { commentsRouter };
