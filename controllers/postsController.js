const db = require("../db/queries");

async function getAllPosts(req, res) {
  //call db to get all posts
  const posts = await db.getAllPosts();
  res.send(posts); //send posts
}

async function getPost(req, res) {
  const id = req.params.id;
  const post = await db.getPost(id);
  res.send(post);
}

async function addPost(req, res) {
  const { title, content, is_published } = req.body;
  await db.addPost(title, content, is_published);
  res.redirect("/");
}

async function deletePost(req, res) {
  const id = req.params.id;
  await db.deletePost(id);
  res.redirect("/");
}

module.exports = { getAllPosts, getPost, addPost, deletePost };
