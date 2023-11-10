const Mongoose = require('mongoose');

const TokenSchema = new Mongoose.Schema({
  user: { type: Mongoose.Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true },
});

module.exports = Mongoose.model('Token', TokenSchema);
