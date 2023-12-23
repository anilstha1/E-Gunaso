const express = require("express");
const authUser = require("../middleware/auth.middleware.js");
const {
  getUser,
  addUser,
  login,
  updateUser,
  deleteUser,
} = require("../controllers/usercontroller.js");
const users = express.Router();

// get user
users.get("/get", authUser, getUser);

//login
users.post("/login", login);

// add user
users.post("/signup", addUser);

users.put("/:id", authUser, updateUser);

users.delete("/:id", authUser, deleteUser);

module.exports = users;
