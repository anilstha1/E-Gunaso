const axios  = require("axios");
const Post = require("../models/post");
const User = require("../models/user");
const ApiError = require("../utils/ApiError");

const getPost = async (req, res) => {
  try {
    var postData = await Post.findById(req.params.id)
      .populate("user", "name")
      .sort({createdAt: -1});
    if (postData.isanonymous) {
      postData = await Post.findById(req.params.id)
        .populate("user", "random_name")
        .sort({createdAt: -1});
    }
    console.log(postData);
    res.status(200).json(postData);
  } catch (err) {
    res.status(401).json({message: err.message});
  }
};

const getUserPosts = async (req, res) => {
  try {
    var postData = await Post.find({user: req.uId}).sort({createdAt: -1});

    res.status(200).json(postData);
  } catch (err) {
    res.status(401).json({message: err.message});
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
      .limit(10);
    console.log(postData);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const getTrendingPosts = async (req, res) => {
  try {
    var postData = await Post.find()
      .populate("user", "name random_name")
      .sort({likes: -1})
      .limit(10);
    console.log(postData);
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};

const addPost = async (req, res) => {
  const {title, post, anonymous} = req.body;
  console.log(req.body);
  const target_office = "metropolitan city";
  const status = "pending";
  try {
    const postData = new Post({
      user: req.uId,
      isanonymous: anonymous,
      title,
      post,
      target_office,
      status,
    });

    const postdata = {
      id: postData._id,
      complaint: title + " " + post,
    };
    // const savedPost = await postData.save();
    if (postData) {
      const url = "http://127.0.0.1:8000/analysis/";
      const response=await axios.post(url,postdata)
      console.log(response)

      if(response){
        postData.target_office=response.data.relevant_authority;
        const savedPost = await postData.save();

        const userData = await User.findById(req.uId);
        userData.posts.push(savedPost._id);
        await userData.save();
        const ids=response.data.recommended_ids;
        ids.pop();
        const recomendedPost=await Post.find({_id:{$in:ids}})
        res.status(201).json({addedPost:savedPost,recomendedPost:recomendedPost});
      }
      else{
        throw new ApiError(400, "failed to add post");
      }

      // const userData = await User.findById(req.uId);
      // userData.posts.push(savedPost._id);
      // await userData.save();
      // res.status(201).json(savedPost);
    } else {
      throw new ApiError(400, "failed to add post");
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateLike = async (req, res) => {
  try {
    var dislikePost = await Post.findOne({
      _id: req.params.id,
      dislikes: req.uId,
    });
    if (dislikePost) {
      var index = dislikePost.dislikes.indexOf(req.uId);
      dislikePost.dislikes.splice(index, 1);
      await dislikePost.save();
    }
    var likePost = await Post.findOne({_id: req.params.id, likes: req.uId});
    if (likePost) {
      var index = likePost.likes.indexOf(req.uId);
      likePost.likes.splice(index, 1);
      await likePost.save();
      res.status(200).json({
        likes: likePost.likes.length,
        dislikes: likePost.dislikes.length,
      });
    } else {
      likePost = await Post.findById(req.params.id);
      likePost.likes.push(req.uId);
      await likePost.save();
      console.log(likePost);
      res.status(200).json({
        likes: likePost.likes.length,
        dislikes: likePost.dislikes.length,
      });
    }
  } catch (err) {
    res.status(400).json({message: err.message});
  }
};
const updateDislike = async (req, res) => {
  try {
    var likePost = await Post.findOne({_id: req.params.id, likes: req.uId});
    if (likePost) {
      var index = likePost.likes.indexOf(req.uId);
      likePost.likes.splice(index, 1);
      await likePost.save();
    }
    var dislikePost = await Post.findOne({
      _id: req.params.id,
      dislikes: req.uId,
    });
    if (dislikePost) {
      var index = dislikePost.dislikes.indexOf(req.uId);
      dislikePost.dislikes.splice(index, 1);
      await dislikePost.save();
      res.status(200).json({
        likes: dislikePost.likes.length,
        dislikes: dislikePost.dislikes.length,
      });
    } else {
      dislikePost = await Post.findById(req.params.id);
      dislikePost.dislikes.push(req.uId);
      await dislikePost.save();
      console.log(dislikePost);
      res.status(200).json({
        likes: dislikePost.likes.length,
        dislikes: dislikePost.dislikes.length,
      });
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
      res.json({message: "post updated successfully"});
    } else {
      throw new Error("user is not authorized");
    }
  } catch (err) {
    res.status(401).json({message: "something went wrong"});
  }
};
const deletePost = async (req, res) => {
  try {
    const postData = await Post.findById(req.params.id);
    if (postData.user.toString() === req.uId.toString()) {
      await Post.findByIdAndDelete(req.params.id);
      const userData = await User.findOne({posts: req.params.id});
      var index = userData.posts.indexOf(req.params.id);
      userData.posts.splice(index, 1);
      await userData.save();
      res.json({message: "post deleted successfully"});
    } else {
      throw new Error("user is not authorized");
    }
  } catch (err) {
    res.status(400).json({message: err.message});
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
  updateDislike,
  updatePost,
  deletePost,
};
