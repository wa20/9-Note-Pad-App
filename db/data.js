const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);

class Db {
  readDbJson() {
    return readFileAsync("db/db.json", "utf-8");
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

  //Take an id and remove from db.json
}

module.exports = new Db();
