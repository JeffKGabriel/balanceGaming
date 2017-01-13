var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RosterSchema = new Schema({
  id: Number,
  age: Number,
	name: String,
  country: String,
  bio: String,
  pic: String,
  game: String,
});

module.exports = mongoose.model('Roster', RosterSchema);
