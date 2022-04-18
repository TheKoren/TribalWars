const express = require('express');
const app = express();
const port = 3000;
const colors = require('colors');
const bodyParser = require('body-parser');
var session = require('express-session');



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(express.static('static'));

app.use(
    session({
        secret: 'secret'
    })
);

// Loading routing
require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

const server = app.listen(port, function () {
    console.log(`Listening on ${server.address().address}:${server.address().port}`);
    console.log("Working".green)
});