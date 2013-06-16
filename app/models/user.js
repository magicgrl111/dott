var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  findOrCreate = require('mongoose-findorcreate');

// Site schema
var UserSchema = new Schema({
  _id: { type: String, required: true },
  email: { type: String, trim: true, required: true },
  display_name: { type: String, trim: true, required: true },
  name: {
    first: { type: String, trim: true },
    last: { type: String, trim: true }
  },
  date_joined: { type: Date, default: Date.now }
});

UserSchema.plugin(findOrCreate);

// Validations
module.exports = mongoose.model('User', UserSchema);
