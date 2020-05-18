// Require application dependencies
const express = require('express');
var bodyParser = require('body-parser');


// Create our app by calling the express function
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// Register a route handler for GET requests made to /hello
app.get('/', (req, res) => {
  res.send('hello world');
});
// use is for moving betwn pages
app.use('/api/v1', require('./route/route')(express));
require("./config/db");
// Get port from environment or default to port 3000.
const port = process.env.PORT || 3000;

// Ask our app to listen on the calculated port.
app.listen(port, () => {
  console.log(`Successfully express js server listening on port ${port}`);
});