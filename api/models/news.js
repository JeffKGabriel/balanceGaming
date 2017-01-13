var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NewsSchema = new Schema({
  id: Number,
  title: String,
  date: String,
	name: String,
  article: String
});

module.exports = mongoose.model('News', NewsSchema);
