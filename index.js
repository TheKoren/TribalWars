const express = require('express');
const app = express();
const port = 3000;
const colors = require('colors');
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('public'));

require('./route/index')(app);

var server = app.listen(port, function () {
    console.log(`Listening on port ${port}`);
    console.log("Working".green)
});