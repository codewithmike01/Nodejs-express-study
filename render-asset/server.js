const express = require('express');

// init server
app = express();

// parseing Data
app.use(express.json());

//Listen to port
app.listen(9000, () => console.log('Server Connected!!!'));

/**
 *
 * ROUTE
 */

//--- Home
app.get('/', (req, res) => {
  res.json({
    statusCode: 200,
    message: 'Welcome home',
  });
});

//--- About
app.get('/about', (req, res) => {
  res.json({
    statusCode: 200,
    message: 'Welcome About',
  });
});

//--- Add post
app.post('/post', (req, res) => {
  res.json({
    statusCode: 200,
    message: 'Welcome Post Add',
  });
});

//--- Get post form
app.get('/post', (req, res) => {
  res.json({
    statusCode: 200,
    message: 'Welcome Post form',
  });
});
