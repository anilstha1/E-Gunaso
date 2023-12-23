const Post = require("../models/post");
const User = require("../models/user");
const ApiResponse = require("../utils/ApiResponse");
const ApiError = require("../utils/ApiError");
const {generateUsername} = require("unique-username-generator");

const addUser = async (req, res) => {
  try {
    const {name, email, phoneNo, age, gender, password} = req.body;

    const user_exists = await User.findOne({email});
    if (user_exists) {
      throw new ApiError(400, "User with email  already exist");
    }

    const username = generateUsername("", 3);
    const userData = new User({
      name,
      random_name: username,
      email,
      phoneNo,
      age: Number(age),
      gender,
      password,
    });
    const savedUser = await userData.save();
    const token = await savedUser.generateAccessToken();
    if (token) {
      return res
        .status(201)
        .json(new ApiResponse(200, token, "User is created Successfully"));
    } else {
      throw new ApiError(500, "Error while creating user");
    }
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

const getUser = async (req, res) => {
  try {
    const userId = req.uId;

    const user = await User.findById(userId).select("-password");

    if (user) {
      res
        .status(200)
        .json(new ApiResponse(200, user, "user existed successfully"));
    } else {
      throw new ApiError(500, "Error while fetching user");
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

const login = async (req, res) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      throw new ApiError(404, "Email and password are required");
    }

    console.log(email, password);

    const user1 = await User.findOne({email});

    if (!user1) {
      throw new ApiError(404, "User doesn't exist");
    }

    const matchPassword = await user1.isPasswordCorrect(password);

    if (!matchPassword) {
      throw new ApiError(400, "Please provide a correct password");
    }
    const token = await user1.generateAccessToken();

    if (token) {
      return res
        .status(201)
        .json(new ApiResponse(200, token, "User logged in Successfully"));
    } else {
      throw new ApiError(500, "Error while login user");
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateUser = async (req, res) => {
  try {
    if (req.uId === req.params.id) {
      const userData = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.json(userData);
    } else {
      throw new Error("user unauthorized");
    }
  } catch (err) {
    res.status(400).json({message: "something went wrong"});
  }
};

const deleteUser = async (req, res) => {
  try {
    if (req.uId === req.params.id) {
      await User.findByIdAndDelete(req.params.id);
      res.json({message: "deleted"});
    } else {
      throw new Error("user unauthorized");
    }
  } catch (err) {
    res.json({message: "something went wrong"});
  }
};

module.exports = { addUser, getUser, login, updateUser, deleteUser };
