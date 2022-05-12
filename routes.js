const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "public", "views", "home.html"));
});

router.get("/new-note", (req, res, next) => {
  res
    .status(200)
    .sendFile(path.join(__dirname, "public", "views", "leave-a-note.html"));
});

router.post("/new-note", (req, res, next) => {
  const { note } = req.body;
  const noteList = req.noteList;
  console.log(noteList);

  noteList.push(note);
  res.redirect("/notes");
});

router.get("/notes", (req, res, next) => {
  const noteList = req.noteList;
  res.render("read-notes", { noteList });
});

module.exports = router;
