// stored note data
const noteData = require('../db/data')

//Routing

//get requests for notes page
app.get('/notes', (req, res) => res.json(noteData))