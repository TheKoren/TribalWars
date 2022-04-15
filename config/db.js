const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hotqm1', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongoose;