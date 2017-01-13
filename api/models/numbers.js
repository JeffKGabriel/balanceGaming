var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NumberSchema = new Schema({
  count: Number,
});

module.exports = mongoose.model('Numbers', NumberSchema);
