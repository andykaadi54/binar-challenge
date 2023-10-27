const http = require("http");
const fs = require("fs");
const getFilePath = require("../public/helpers/getFilePath");

const port = 3000;

const server = http.createServer((req, res) => {
  let filePath = getFilePath(req.url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("File not found");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});

server.listen(port, "localhost", () => {
  console.log(`Server sudah berjalan, silahkan buka http://localhost:${port}`);
});
