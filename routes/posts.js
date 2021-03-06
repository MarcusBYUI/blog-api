const routes = require("express").Router();
const {
  getAllPost,
  getPostById,
  getPostByTitle,
  getPostByCategory,
  getPostByUser,
  addPost,
  updatePost,
  deletePost,
} = require("../controller/post/post");

const Authroute = require("./auth");

const isAuth = async (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.send("This is a protected resource, log in to continue");
  }
};

//Get all posts
routes.get("/", getAllPost);
//Get a single post by post id
routes.get("/:id", getPostById);
//Get a post by title
routes.get("/title/:title", getPostByTitle);
//Get all posts in a certain category
routes.get("/category/:category", getPostByCategory);
//Get all posts for a user by user id
routes.get("/user/:userid", getPostByUser);
//Create a post
routes.post("/", isAuth, addPost);
//Update a post
routes.put("/:id", isAuth, updatePost);
//Delete a post
routes.delete("/:id", isAuth, deletePost);

module.exports = routes;
