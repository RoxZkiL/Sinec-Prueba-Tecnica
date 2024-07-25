const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/api/posts/", postController.getAllPosts);
router.post("/api/posts/", postController.createPost);
router.get("/api/posts/:id", postController.getPostById);

module.exports = router;
