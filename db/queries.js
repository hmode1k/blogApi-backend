const pool = require("./pool");

async function getAllPosts() {
  const { rows } = await pool.query("SELECT * FROM posts");
  return rows;
}

async function getPost(id) {
  const { rows } = await pool.query("SELECT * FROM posts WHERE id = $1", [id]);
  return rows;
}

async function addPost(title, content, is_published) {
  await pool.query(
    "INSERT INTO posts (title, content, is_published) VALUES ($1, $2, $3)",
    [title, content, is_published],
  );
}

async function deletePost(id) {
  await pool.query("DELETE FROM posts WHERE id = $1", [id]);
}

// comments queries section

// this function get all the comments on a specific post based on the post id
async function getAllComments(postId) {
  const { rows } = await pool.query(
    "SELECT * FROM commnts WHERE post_id = $1",
    [postId],
  );
  return rows;
}

// add a comment to a post
async function addComment(comment, postId, userId) {
  await pool.query(
    "INSERT INTO commnts (comment, post_id, user_id) VALUES ($1, $2, $3)",
    [comment, postId, userId],
  );
}

//delete comment based on comment id
async function deleteComment(id) {
  await pool.query("DELETE FROM commnts WHERE id = $1", [id]);
}

async function signUpUser(username, email, password) {
  const rows = await pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
    [username, email, password],
  );
  return rows;
}

module.exports = {
  getAllPosts,
  getPost,
  addPost,
  deletePost,
  getAllComments,
  addComment,
  deleteComment,
  signUpUser,
};
