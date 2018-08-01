const express = require('express');
const app = express();
const BP = require('body-parser');

const port = 3000;

app.use(express.static('views'));
app.use(express.static('public'));

app.listen(port, () => {
    console.log("Listening on port",port);
});