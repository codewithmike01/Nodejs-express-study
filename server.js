const express = require('express');

const { createFolder, createFile, defaultPosts } = require('./utils');
let postsData = require('./data/posts.json');
const fs = require('fs');
const app = express();

//Parse Data
app.use(express.json());

// Create a Server
app.listen(9000, () => {
  console.log('Server is runing');
});

// Routing

// Home route
app.get('/', (req, res) => {
  res.send('Home route');
});

// Post Endpoints

// Create Post
app.post('/posts', (req, res) => {
  const newPost = req.body;

  postsData.push({
    ...newPost,
    id: postsData.length.toString(),
  });

  fs.writeFile('data/posts.json', JSON.stringify(postsData), (err) => {
    if (err) console.log(err);
    else {
      res.json({
        statusCode: 200,
        message: 'Post Created Successfully',
      });
    }
  });
});

// Fetch all posts
app.get('/posts', (req, res) => {
  res.json({
    message: 'Post fecthed Successfully',
    statusCode: 200,
    postsData,
    numberOfPosts: postsData.length,
  });
});

// Fetch a post
app.get('/posts/:id', (req, res) => {
  const { id } = req.params;

  const postData = postsData.find((post) => post.id === id);

  if (postData)
    res.json({
      message: 'Post fetched Successfully',
      statusCode: 200,
      postData,
    });
  else res.json({ statusCode: 404, message: 'Post with id ${id} not found' });
});

// Update Post
app.put('/posts/:id', (req, res) => {
  // Get dynamic id
  const { id } = req.params;

  const { url, title, description } = req.body;

  let isPostFound = postsData.find((post) => post.id === id);

  if (isPostFound) {
    isPostFound.url = url;
    isPostFound.title = title;
    isPostFound.description = description;

    const newPosts = postsData.map((post) => {
      if (post.id === id) {
        return isPostFound;
      } else return post;
    });

    fs.writeFile('data/posts.json', JSON.stringify(newPosts), (err) => {
      if (err) console.log(err);
      else {
        res.json({
          statusCode: 200,
          message: 'Post updated successfully',
        });
      }
    });
  } else {
    res.json({
      statusCode: 404,
      message: 'Post Not Found',
    });
  }
});

// Delete Post
app.delete('/posts/:id', (req, res) => {
  // Get dynamic id
  const { id } = req.params;

  let oldLength = postsData.length;
  let newPostData = postsData.filter((post) => post.id !== id);

  if (oldLength > newPostData.length) {
    fs.writeFile('data/posts.json', JSON.stringify(newPostData), (err) => {
      if (err) console.log(err);
      else {
        res.json({
          statusCode: 200,
          message: `Post Deleted successfully  ${id}`,
        });
      }
    });
  } else {
    res.json({
      statusCode: 404,
      message: `Post Not Found`,
    });
  }
});
