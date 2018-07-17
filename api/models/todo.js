var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  text: {
    type: String,
    required: true
  }
});
var Model = mongoose.model('Todo', todoSchema);
module.exports = Model;
