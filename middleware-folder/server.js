const express = require('express');
const morgan = require('morgan');
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
// const logger = (req, res, next) => {
//   console.log('In middleware logger');
//   next();
// };

//Chaning Middleware
// app
//   .use((req, res, next) => {
//     console.log('In First middleware logger');
//     next();
//   })
//   .use((req, res, next) => {
//     console.log('In Second middleware logger');
//     next();
//   })
//   .use((req, res, next) => {
//     console.log('In  Third middleware logger');
//     next();
//   });

let requestCount = 0;

// app.use(logger);
app.use(morgan('combined'));

// PRotected Middleware
const protected = (req, res, next) => {
  const userDetails = {
    isLogin: false,
    username: 'John',
  };

  if (userDetails.isLogin) next();
  else {
    res.json({
      stausCode: 401,
      message: 'Unauthorized',
    });
  }
};

// PRotected Middleware
const isAdmin = (req, res, next) => {
  const userDetails = {
    isAdmin: true,
    username: 'John',
  };

  if (userDetails.isAdmin) next();
  else {
    res.json({
      stausCode: 401,
      message: 'Unauthorized, Not an Admin',
    });
  }
};

// middleware to log the url, request method date and time
//Challenge Solution 1
const logDetials = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const date = new Date().toDateString();

  console.log(`${method} ${url} ${date}`);
  next();
};

//Challenge Solution 2
const limitRequest = (req, res, next) => {
  requestCount++;
  console.log(requestCount);
  if (count >= 10) {
    res.json({
      statusCode: 429,
      message: 'Too many request',
    });
  } else {
    next();
  }
};
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
app.get('/posts', limitRequest, (req, res) => {
  res.json({
    stausCode: 200,
    message: 'Post got Successful',
  });
});

// Auth User
// Create post
app.post('/posts', protected, (req, res) => {
  res.json({
    statusCode: 200,
    message: 'Posted successfully',
  });
});

// Protected
app.delete('/posts/:id', isAdmin, logDetials, (req, res) => {
  const { id } = req.params;

  res.json({
    statusCode: 200,
    message: `Delete successfully ${id}`,
  });
});
