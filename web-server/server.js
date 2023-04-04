const http = require('http');
const fs = require('fs');

//create server

const server = http.createServer();

//Listen to server
server.listen(9000, () => {
  console.log('Server Started Succesffuly');
});

// Listen to event
server.on('request', (req, res) => {
  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'Application/json' });
    res.write('{greeting: Hello Mike World');
    res.end();
  } else if (url === '/login') {
    fs.readFile('login.html', (err, data) => {
      if (err) console.log(err);
      else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else if (url === '/register') {
    fs.readFile('register.html', (err, data) => {
      if (err) console.log(err);
      else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  }

  if (url === '/create-post') {
    const post = [];
    req
      .on('data', (chunk) => {
        post.push(chunk);
      })
      .on('end', () => {
        const finalData = Buffer.concat(post).toString();
        res.writeHead(200, { 'Content-Type': 'text/html' });
        console.log(finalData);
        res.write('Post Created');
        res.end();
      });
  }
});
