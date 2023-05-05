const express = require('express');

const Post = require('../models/Post');
const postRouter = express.Router();

// POST /posts
postRouter.post('/', async (req, res) => {
  try {
    const savePost = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });

    // Response
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});

// GET /posts
postRouter.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});
