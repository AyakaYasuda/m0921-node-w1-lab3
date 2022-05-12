const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", "public/views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const noteList = [];

app.use((req, res, next) => {
  req.noteList = noteList;
  next();
});

app.use(routes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "public", "views", "404.html"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running");
});
