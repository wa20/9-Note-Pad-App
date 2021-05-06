//obtaining the express dependency
const express = require('express');

const app = express()

const PORT = process.env.PORT || 8080;



app.use(express.json());
app.use(express.static('public'));// this is how we serve files as middleware. in this instance we pass everything inside the contents of public
app.use('/api', apiRoutes) //double check
app.use('/', htmlRouts) // double check


app.use