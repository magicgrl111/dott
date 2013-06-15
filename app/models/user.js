var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// Site schema
var UserSchema = new Schema({
  username    : { type: String, trim: true, required: true },
  password    : { type: String, required: true },
  date_joined : { type: Date, default: Date.now }
});

// Validations
mongoose.model('User', UserSchema);