const express = require('express');
const app = express();
const BP = require('body-parser');
const routes = require('./routes/index.js');

// Serve public files
app.use(express.static('public'));

// Handle routes
app.use('/', routes);

// Create and start the server
const port = process.env.PORT || '3000'; 
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});