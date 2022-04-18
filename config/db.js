const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hotqm1', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error:".red))

module.exports = mongoose;