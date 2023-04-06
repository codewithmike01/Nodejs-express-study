const express = require('express');

//init server
app = express();

// Listen to port
app.listen(9000, () => console.log('Server connectd'));

//Parse data
app.use(express.json());

/**
 *
 * Create middleware
 * Middleware knows the req, res and
 * the next function/operation
 *
 */
// middleware
const logger = (req, res, next) => {
  console.log('In middleware logger');
  next();
};

app.use(logger);

// ---------
// ROUTES
// -----------

// Home
app.get('/', (req, res) => {
  res.json({
    stausCode: 200,
    message: 'Hello Mike',
  });
});

// Login
app.post('/login', (req, res) => {
  const { title } = req.body;

  res.json({
    statusCode: 200,
    message: `Login Successfully ${title}`,
  });
});

// Public role
// Get Post
app.get('/posts', (req, res) => {
  res.json({
    stausCode: 200,
    message: 'Post got Successful',
  });
});

// Auth User
// Create post
app.post('/posts', (req, res) => {
  res.json({
    statusCode: 200,
    message: 'Posted successfully',
  });
});

app.delete('/posts/:1d', (req, res) => {
  res.json({
    statusCode: 200,
    message: 'Delete successfully',
  });
});
