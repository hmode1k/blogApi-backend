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

module.exports = {
  getAllPosts,
  getPost,
  addPost,
  deletePost,
};
