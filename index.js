const http = require("node:http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    case "/":
      fs.readFile("index.html", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
      break;
    case "/about":
      fs.readFile("about.html", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
      break;
    case "/contact":
      fs.readFile("contact.html", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Internal Server Error");
        } else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
      break;
    default:
      fs.readFile("404.html", (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Internal Server Error");
        } else {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(data);
        }
      });
  }
});

server.listen(8000);
