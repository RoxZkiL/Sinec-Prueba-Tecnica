const express = require("express");
const router = express.Router();
const Post = require("../models/dbModels");

exports.getAllPosts = async (_, res) => {
  try {
    const posts = await Post.findAll();
    if (posts) {
      res.status(200).json(posts);
    } else {
      res.status(404).json({ error: "No se encontró ningún post" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error al recibir los posts" });
  }
};

exports.createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content || !author) {
      res.status(404).json({ error: "No se creó el post" });
    } else {
      const newPost = await Post.create({ title, content, author });
      res.status(200).json(newPost);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al crear el post" });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ error: "Post no encontrado" });
    }
  } catch (error) {
    console.error("Error al encontrar el post:", error);
    res.status(500).json({ error: "Error al encontrar el post" });
  }
};
