var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
  username: String,
  email: String,
  password: String
});

module.exports = User;