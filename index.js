const http = require("http");
const fs = require("fs");
const PORT = 5000;

const requestListener = (request, response) => {
  fs.readFile("./views/index.html", { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log(err);
    }
    response.end(data)
  });
};

const server = http.createServer(requestListener);
server.listen(PORT);
