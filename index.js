const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // if (req.url === '/') {
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
  //     if (err) throw err;

  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(data);
  //   });
  // } else if (req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, data) => {
  //     if (err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html' });
  //     res.end(data);
  //   });

  //   // res.end('<h1>ABout us</h1>');
  // }
  // if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'Pawan', age: 21 },
  //     { name: 'Tanya', age: 19 },
  //   ];
  //   res.writeHead(200, { 'Content-Type': 'application/json' });
  //   res.end(JSON.stringify(users));
  // }

  // console.log(req.url);
  // Build file path
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );
  console.log(filePath);
  let ext = path.extname(filePath);
  console.log(ext);

  let contentType = 'text/html';
  switch (ext) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }
  console.log(contentType);
  //read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // page not found
        fs.readFile(
          path.join(__dirname, 'public', '404.html'),
          (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf8');
          }
        );
      } else {
        // some server error likely, 500
        res.writeHead(500);
        res.end('Server Error: ', err.code);
      }
    } else {
      // no error: success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf8');
    }
  });
});
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('server running on port ', PORT));
