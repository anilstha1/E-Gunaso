const express = require("express");
const {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentcontroller");
const authUser = require("../middleware/auth.middleware");
const comments = express.Router();

// get comments
comments.get("/get/:id", getComments);

// add posts
comments.post("/add", authUser, addComment);

comments.put("/:id", authUser, updateComment);

comments.delete("/:id", authUser, deleteComment);
module.exports = comments;
