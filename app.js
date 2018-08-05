const express = require('express');
const app = express();
const routes = require('./routes/index.js');

// Serve public files
app.use(express.static('public'));

// Handle routes
app.use('/api/', routes);
app.use('/', routes);
app.use('*', (request, response) => {
    response.send("404 — File not found");
});

// Create and start the server
const port = process.env.PORT || '3000'; 
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});