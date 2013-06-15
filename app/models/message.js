var mongoose = require('mongoose'),
    Message  = mongoose.Schema;

// Site schema
var MessageSchema = new Schema({
  user_id    : { type: String, default: '', required: true },
  created_at : { type: Date, default: Date.now }
});

// Validations
mongoose.model('Message', MessageSchema);