project/
│── app.js
│── views/
    └── index.html

//<~~~~~~~

//app.js
const http = require('http');
const fs = require('fs');
const path = require('path');

// user-defined functions
function cToF(c) {
  return (c * 9/5) + 32;
}
function fToC(f) {
  return (f - 32) * 5/9;
}

// create server
http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, 'views', 'index.html');

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("Error loading page");
      } else {
        // sample conversion
        const c = 100, f = 212;
        const result = `
          <h1>Temperature Converter</h1>
          <p>${c}C = ${cToF(c)}F</p>
          <p>${f}F = ${fToC(f)}C</p>
        `;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data + result);
      }
    });
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("Page not found");
  }
}).listen(3000, () => console.log("Server running at http://localhost:3000"));

//views/index.html
<!DOCTYPE html>
<html>
<head>
  <title>Temperature Converter</title>
</head>
<body>
