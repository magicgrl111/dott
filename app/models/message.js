var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

// Site schema
var MessageSchema = new Schema({
  user_id    : { type: String, default: '', required: true },
  created_at : { type: Date, default: Date.now }
});

// Validations
mongoose.model('Message', MessageSchema);
