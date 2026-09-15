const { use } = require("passport");
const db = require("../db/queries");

async function getAllComments(req, res) {
  const postId = req.params.postId;
  const comments = await db.getAllComments(postId);
  res.send(comments);
}

async function addComment(req, res) {
  const { comment } = req.body;
  const postId = req.params.postId;
  const userId = 1; //place holder value until i implement auth
  await db.addComment(comment, postId, userId);
  res.redirect("/");
}

async function deleteComment(req, res) {
  const id = req.params.commentId;
  await db.deleteComment(id);
  res.redirect("/");
}

module.exports = { getAllComments, addComment, deleteComment };
