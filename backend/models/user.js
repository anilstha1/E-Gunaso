const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    random_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    password: {type: String, required: true},
    posts: [
      {type: mongoose.Schema.Types.ObjectId, ref: "posts", required: true},
    ],
  },
  {timestamps: true}
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateAccessToken = async function () {
  const payload = {
    _id: this._id,
    email: this.email,
    phoneNo: this.phoneNo,
    name: this.name,
  };

  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
  });
};

const User = mongoose.model("users", UserSchema);
module.exports = User;
