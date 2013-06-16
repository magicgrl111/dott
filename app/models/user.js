var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Site schema
var UserSchema = new Schema({
  _id: { type: String, required: true },
  email: { type: String, trim: true, required: true },
  display_name: { type: String, trim: true, required: true },
  name: {
    first: { type: String, trim: true },
    last: { type: String, trim: true }
  },
  token: { type: String },
  date_joined: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
