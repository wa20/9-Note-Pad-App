const util = require("util");
const fs = require("fs");
const uniqueID = require("uuid") //install package

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Db {
  readDbJson() {
    return readFileAsync("db/db.json", "utf-8");
  }

  writeDbJson(notes){
      return writeFileAsync('db/db.json', JSON.stringify(notes))
  }
  //Get all notes from db.json and return
  //we parse the notes, and put it into an array
  getAllNotes() {
    return this.readDbJson().then((notes) => {
      let parsed;
      try {
        parsed = [].concat(JSON.parse(notes));
      } catch (err) {
        parsed = [];
      }
      return parsed;
    });
  }

  //Take a note as an argument and added to db.json
postNote(note){
    const { title, text } = note

    const addNote = {
        title,
        text,
        id: uniqueID.v4(),
    }

    return this.getNotes()
        .then((note) => [...note, addNote])
        .then((newNoteArray) => {
            this.writeFile(newNoteArray)
        })
        .then(() => console.log("added new note"))
}
    //1. Get all notes from db.json
    //2. Create a new array of objects containing old notes and the new note
    //3. Write the new array of objects/notes to the db.json file utilising writeDbJson function




  //Take an id and remove from db.json
  deleteNote(id) {
    return this.getNotes()
    .then((notes) =>
        notes.filter((note) => note.id !== id)
    )
    .then((filtered) => this.writeFile(filtered))
}

}
//1. Get all notes from db.json
//2. Filtered out the note which has the corresponding id
//3. Write the new filtered array of objects/notes to the db.json file utilising writeDbJson function
  


module.exports = new Db();
