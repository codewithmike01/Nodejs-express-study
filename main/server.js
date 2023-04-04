const fs = require('fs');
const http = require('http');

// For dynamic path
const path = require('path');
// fs.mkdir(path['pages'], (err) => {
//   if (err) console.log(err);
//   else console.log('File Created');
// });

const server = http.createServer();

server.listen(9000, console.log('server is runing'));

// fs.mkdir('public/pages', (err) => {
//   if (err) console.log(err);
//   console.log('folder has being created');
// });

//Create File
// fs.writeFile('public/css/style.css', 'This is html Css page', (err) => {
//   if (err) console.log(err);
//   else console.log('File created');
// });

server.on('request', (req, res) => {
  const url = req.url;

  // Dynamic path
  if (url === '/') {
    const filePath = path.join(__dirname, 'public/pages', 'home.html');
    fs.readFile(filePath, (err, data) => {
      if (err) console.log(err);
      else {
        res.writeHead(200, 'Content-Type: Application/html');
        res.write(data);
        res.end();
      }
    });
  }
  if (url === '/about') {
    const filePath = path.join(__dirname, 'public/pages', 'about.html');
    console.log(filePath);

    fs.readFile(filePath, (err, data) => {
      if (err) console.log(err);
      else {
        res.writeHead(200, 'Content-Type: Application/html');
        res.write(data);
        res.end();
      }
    });
  }
});
