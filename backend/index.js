const express = require("express");
const mongoose = require("mongoose");
const posts = require("./routes/posts");
const comments = require("./routes/comments");
const users = require("./routes/users");
const cors = require("cors");
const app = express();
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Successfully  connected to db");
}).catch((err) => {
    console.log("Error while  connecting to db", err);
    process.exit(1);
});

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.listen(3000, () => {
    console.log("Server started at port 3000");
});

app.use("/users", users);
app.use("/posts", posts);
app.use("/comments", comments);
