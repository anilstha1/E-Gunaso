const Comment = require("../models/comment");
const Post = require("../models/post");

const getComments = async (req, res) => {
  try {
    commentData = await Comment.find({
      post: req.params.id,
    })
      .populate("user", "random_name")
      .sort({createdAt: -1});
    console.log(commentData);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(401).json({message: err.message});
  }
};

const addComment = async (req, res) => {
  try {
    const {postId, comment} = req.body;
    console.log(req.body);
    const postData = await Post.findById(postId);
    if (!postData) {
      throw new Error("post doesnot exist");
    }
    const commentData = new Comment({
      user: req.uId,
      post: postId,
      comment,
    });
    await commentData.save();
    if (commentData) {
      postData.comments.push(commentData._id);
      await postData.save();
      res.status(200).json(commentData);
    } else {
      throw new Error("something went wrong");
    }
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updateComment = async (req, res) => {
  try {
    const commentData = await Comment.findById(req.params.id);
    if (commentData.user.toString() === req.uId.toString()) {
      await Comment.findByIdAndUpdate(req.params._id, {
        $set: req.body,
      });
      res.json(commentData);
    } else {
      throw new Error("user is not authorized");
    }
  } catch (err) {
    res.status(400).json({message: "something went wrong"});
  }
};

const deleteComment = async (req, res) => {
  try {
    const commentData = await Comment.findById(req.params.id);
    if (commentData.user.toString() === req.uId.toString()) {
      await Comment.findByIdAndDelete(req.params.id);
      const postData = await Post.findOne({comments: req.params.id});
      var index = postData.comments.indexOf(req.params.id);
      postData.comments.splice(index, 1);
      await postData.save();
      res.json({message: "comment deleted successfully"});
    } else {
      throw new Error("user is not authorized");
    }
  } catch (err) {
    res.status(400).json({message: "something went wrong"});
  }
};

module.exports = {getComments, addComment, updateComment, deleteComment};
