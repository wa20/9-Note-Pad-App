// stored note data
const noteData = require("../db/data");
const router = require("express").Router();

//get requests for notes page

router.get("/api/notes", (req, res) => {
  console.log("get request called")
  noteData.getAllNotes().then((notes) => {
      return res.json(notes)
  })
});

router.post("/api/notes", (req, res) => {
    console.log("post request called")
});

router.delete("/api/notes/:id", (req, res) => {
    console.log("delete request called")
});

module.exports = router;
