const mongoose = require("mongoose");

var PostSchema = new mongoose.Schema(
  {
    user: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
    isanonymous: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    target_office: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    likes: [
      {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
    ],
    comments: [
      {type: mongoose.Schema.Types.ObjectId, ref: "comments", required: true},
    ],
  },
  {timestamps: true}
);
const Post = mongoose.model("posts", PostSchema);
module.exports = Post;
