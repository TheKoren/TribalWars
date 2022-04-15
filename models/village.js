var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Village = db.model('Village', {
  name: String,
  materials: Number,
  knights: Number,
  _owner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
});

module.exports = Village;