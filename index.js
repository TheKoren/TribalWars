const express = require('express');
const app = express();
const port = 3000;
const colors = require('colors');
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use('/static', express.static('static'));

app.use(
    session({
        secret: 'asf78as6f76as5fa78sfz',
        resave: false,
        saveUninitialized: true,
        cookie: {secure: false}
    })
);

// Loading routing
require('./route/index')(app);

/*
app.use((err, req, res, next) => {
    console.log(err);
    res.end('Problem...');
});*/

const server = app.listen(port, function () {
    console.log(`Listening on ${server.address().address}:${server.address().port}`);
    console.log("Working".green)
});