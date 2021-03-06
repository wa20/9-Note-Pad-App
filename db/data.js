const util = require("util");
const fs = require("fs");
const uniqueID = require("uuidv4") //install package


const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Db {
  readDbJson = () => {
    return readFileAsync("db/db.json", "utf-8");
  }

  writeDbJson = (note) => {
      return writeFileAsync('db/db.json', JSON.stringify(note))
  }
  //Get all notes from db.json and return
  //we parse the notes, and put it into an array
  getAllNotes = () => {
    return this.readDbJson().then((note) => {
      let parsedNotes;

      try {
        parsedNotes = [].concat(JSON.parse(note));
      } catch (err) {
        parsedNotes = [];
      }
      return parsedNotes;
    });
  }

  //Take a note as an argument and added to db.json
postNote = (note) =>{
    const { title, text } = note

    if(!title || !text){
      throw new Error('Include titale and text')
    }

    const addNote = {
        title,
        text,
        id: uniqueID(),
    }

    return this.getAllNotes()
        .then((note) => [...note, addNote])
        .then((newNote) => {this.writeDbJson(newNote)})
        .then(() => 
        addNote,
        console.log("added new note"))
}
    //1. Get all notes from db.json
    //2. Create a new array of objects containing old notes and the new note
    //3. Write the new array of objects/notes to the db.json file utilising writeDbJson function


  //Take an id and remove from db.json
  deleteNote = (id) => {
    return this.getAllNotes()
    .then((notes) =>
        notes.filter((note) => note.id !== id)
    )
    .then((filteredArray) => this.writeDbJson(filteredArray))
}

}
//1. Get all notes from db.json
//2. Filtered out the note which has the corresponding id
//3. Write the new filtered array of objects/notes to the db.json file utilising writeDbJson function
  


module.exports = new Db();
