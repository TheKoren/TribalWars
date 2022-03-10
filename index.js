const express = require('express');
const app = express();
const port = 3000;
const colors = require('colors');

app.use(express.static('public'));

var server = app.listen(port, function () {
    console.log(`Listening on port ${port}`);
    console.log("Working".green)
});