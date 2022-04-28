var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Knight = db.model('Knight', {
  name: String,
  xp: String,
  _home: {
      type: Schema.Types.ObjectId,
      ref: 'Village'
  }
});

module.exports = Knight;