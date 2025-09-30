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

// sample conversion (output in console)
const c = 100, f = 212;
console.log("Temperature Converter");
console.log(`${c}C = ${cToF(c)}F`);
console.log(`${f}F = ${fToC(f)}C`);

// create server
http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(__dirname, 'views', 'index.html');

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end("Error loading page");
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data); // only shows the HTML content
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
  <title>My Page</title>
</head>
<body>
  <h1>Random text from index.html</h1>
</body>
</html>


//note: this is shorter version
//one file only which is app.js
const http = require('http');

// user-defined functions
const cToF = c => (c * 9/5) + 32;
const fToC = f => (f - 32) * 5/9;

// console output
console.log("Temperature Converter");
console.log(`100C = ${cToF(100)}F`);
console.log(`212F = ${fToC(212)}C`);

http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end("<h1>Random text from server</h1>");
  }
}).listen(3000, () => console.log("http://localhost:3000"));
