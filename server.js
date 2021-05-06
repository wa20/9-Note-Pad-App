//obtaining the express dependency
const express = require('express');
const htmlRoutes = require("./routes/htmlRoutes")
const apiRoutes = require("./routes/apiRoutes")

const app = express()

const PORT = process.env.PORT || 3005;
app.use(express.json());
app.use(express.urlencoded({extended: true})) //this encodes the url and allows us to accept json 

app.use(express.static('public'));


// this is how we serve files as middleware. in this instance we pass everything inside the contents of public. for every request we serve these files.
 app.use('/', apiRoutes) //double check - currently looking into nothing need to create files
 app.use('/', htmlRoutes) // double check


app.listen(PORT, () => {console.log(`Server listneing on Port: ${PORT}`)})