const User = require("../models/user");
const {ApiError} = require("../utils/ApiError");
const jwt = require("jsonwebtoken");

const authUser = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      throw new ApiError(400, "Authorization token doesn't exist");
    }

    const user = jwt.decode(token, process.env.ACCESS_TOKEN_SECRET);
    if (!user) {
      return res.status(400).json({
        message: "Invalid Token",
      });
    }
    const userData = await User.findById(user._id);
    if (!userData) {
      throw new ApiError(500, "user is not found");
    }
    if (user) {
      req.uId = user._id;
      next();
    } else {
      throw new ApiError(500, "Error while fetching user");
    }
  } catch (error) {
    res.status(401).json({message: error.message});
  }
};

module.exports = authUser;
