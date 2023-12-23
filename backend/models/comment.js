const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
    post: {type: mongoose.Schema.Types.ObjectId, ref: "posts", required: true},
    comment: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);
const Comment = mongoose.model("comments", CommentSchema);
module.exports = Comment;
