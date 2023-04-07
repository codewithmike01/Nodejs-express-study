const express = require('express');

// init server
app = express();

// parseing Data
app.use(express.json());

// configure to parse data from form
app.use(express.urlencoded({ extended: true }));

//Listen to port
app.listen(9000, () => console.log('Server Connected!!!'));

/** Server static file
 *  From public folder */

// Use a middleware
app.use(express.static('public'));

/**
 *
 * ROUTE
 */

const rootFolder = __dirname;

//--- Home
app.get('/', (req, res) => {
  res.sendFile(rootFolder + '/public/pages/index.html');
});

//--- About
app.get('/about', (req, res) => {
  res.sendFile(rootFolder + '/public/pages/about.html');
});

//--- Add post
app.get('/addPost', (req, res) => {
  res.sendFile(rootFolder + '/public/pages/addPost.html');
});

//--- Get post form
app.post('/addPost', (req, res) => {
  console.log('In podt herer');

  const { title, url, body } = req.body;

  res.json({
    statusCode: 200,
    message: `${title} ${url} ${body}`,
  });
});
