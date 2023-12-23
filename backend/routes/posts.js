const express = require("express");
const authUser = require("../middleware/auth.middleware");
const {
  getPost,
  getUserPosts,
  getAllPosts,
  searchPosts,
  addPost,
  updatePost,
  deletePost,
} = require("../controllers/postcontroller");
const posts = express.Router();

//get post
posts.get("/getPost/:id", getPost);

// get all posts
posts.get("/getAllPosts", getAllPosts);

// get post of User
posts.get("/getUserPosts", authUser, getUserPosts);

// search posts
posts.get("/searchPost", searchPosts);

// add posts
posts.post("/add", authUser, addPost);

posts.put("/:id", authUser, updatePost);

posts.delete("/:id", authUser, deletePost);
module.exports = posts;
