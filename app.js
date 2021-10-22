const express = require("express");
const app = express();
const PORT = 5000;
const bodyParser = express.json();

app.post('/user', (req, res, next) => {
  console.log(req.body);
  
  res.send(req.body);
})


// app.get(
//   "/",
//   (req, res, next) => {
//     console.log('1st callback');
//     req.secret = 42;
//     next();
//   },
//   (req, res, next) => {
//     console.log(req.secret);
//     next();
//   },
//   (req, res) => {
//     const { method, path } = req;
//     res.send(`HAPPY HACKING! METHOD IS: ${method} PATH IS: ${path}`);
//   }
// );

// app.get("/about", (req, res) => {
//   console.log("about page");

//   res.send("<h2>ABOUT PAGE</h2>");
// });

// app.get("*", (req, res) => {
//   res.send("NOT FOUND");
// });

app.listen(PORT, () => {
  console.log("server is running");
});
