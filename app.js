const express = require('express');
const app = express();
const BP = require('body-parser');

const port = 3000;

app.use(express.static('views'));
app.use(express.static('public'));

// Create and start the server
const port = process.env.PORT || '3000'; 
app.listen(port, () => {
    console.log(`Listening on localhost:${port}`);
});