const Post = require("../models/post");
const User = require("../models/user");
const ApiError = require("../utils/ApiError");

const getPost = async (req, res) => {
  try {
    postData = await Post.findById(req.params.id)
      .populate("user", "name")
      .sort({createdAt: -1});
    if (postData.isanonymous) {
      postData = await Post.findById(req.params.id)
        .populate("user", "random_name")
        .sort({createdAt: -1});
    }
    console.log(postData);
    console.log(postData);
    res.status(200).json(postData);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const getUserPosts = async (req, res) => {
  try {

    var postData = await Post.find({user: req.uId}).sort({createdAt: -1});

    res.status(200).json(postData);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    console.log("hello");
    var postData = await Post.find()
      .populate("user", "name random_name")
      .sort({createdAt: -1});

    console.log(postData);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};
const searchPosts = async (req, res) => {
  try {
    console.log("hello");
    const postData = await Post.find({
      post: {$regex: req.query.search, $options: "i"},
    })
      .populate("user", "name random_name")
      .sort({createdAt: -1});
    console.log(postData);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const getTrendingPosts = async (req, res) => {
  try {
    var postData = await Post.find([{$sample: {size: 1}}])
      .populate("user", "name random_name")
      .sort({createdAt: -1});
    console.log(postData);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const addPost = async (req, res) => {
  const { title, post, anonymous } = req.body;
let isanonymous = false;
if (anonymous === "true") {
  isanonymous = true;
}
const target_office = "metropolitan city";
const status = "pending";
try {
  const postData = new Post({
    user: req.uId,
    isanonymous,
    title,
    post,
    target_office,
    status,
  });
  const savedPost = await postData.save();

  // const post = {
  //   id: savedPost._id,
  //   complaint: title + " " + post,
  // };

  if (savedPost) {
    // const url = "/analysis/";
    // const res = await fetch(url, {
    //   method: "POST",
    //   mode: "cors",
    //   cache: "no-cache",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   redirect: "follow",
    //   referrerPolicy: "no-referrer",
    //   body: JSON.stringify(data),
    // });

    const userData = await User.findById(req.uId);
    userData.posts.push(savedPost._id);
    await userData.save();
    res
      .status(201)
      .json({addedPost: savedPost, message: "post added successfully"});
    // res.json({message: "post added successfull"});
  } else {
    throw new ApiError(400, "failed to add post");
  }
} catch (err) {
  res.status(400).send(err);
}
};

const updateLike = async (req, res) => {
  try {
    var postData = await Post.findOne({_id: req.params.id, likes: req.uId});
    if (postData) {
      var index = postData.likes.indexOf(req.uId);
      postData.likes.splice(index, 1);
      await postData.save();
      res.status(200).json({likes: postData.likes.length});
    } else {
      postData = await Post.findById(req.params.id);
      postData.likes.push(req.uId);
      await postData.save();
      console.log(postData);
      res.status(200).json({likes: postData.likes.length});
    }
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const updatePost = async (req, res) => {
  try {
    const postData = await Post.findById(req.params.id);
    console.log(postData.user, req.uId);
    if (postData.user.toString() === req.uId.toString()) {
      console.log("hello");
      await Post.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.json({ message: "post updated successfully" });
    } else {
      throw new Error("user is not authorized");
    }
  } catch (err) {
    res.status(401).json({ message: "something went wrong" });
  }
};
const deletePost = async (req, res) => {
  try {
    const postData = await Post.findById(req.params.id);
    if (postData.user.toString() === req.uId.toString()) {
      await Post.findByIdAndDelete(req.params.id);
      const userData = await User.findOne({ posts: req.params.id });
      var index = userData.posts.indexOf(req.params.id);
      userData.posts.splice(index, 1);
      await userData.save();
      res.json({ message: "post deleted successfully" });
    } else {
      throw new Error("user is not authorized");
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getPost,
  getUserPosts,
  getAllPosts,
  searchPosts,
  getTrendingPosts,
  addPost,
  updateLike,
  updatePost,
  deletePost,
};
