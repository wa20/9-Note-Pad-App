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
    noteData.postNote(req.body).then((note) => {
        res.json(note)})
});

router.delete("/api/notes/:id", (req, res) => {
    console.log("delete request called")
    const id = req.params.id; 
    noteData.deleteNote(id).then(()=> 
    res.json({Response: "Successful"})).catch((error) => res.json(error))
});

module.exports = router;
