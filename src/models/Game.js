const Mongoose = require('mongoose');

const GameSchema = new Mongoose.Schema({
  commonGameName: {
    type: String,
    required: true,
  },
  gameDescription: {
    type: String,
    required: false,
  },
  gameImage: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  inTop: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Mongoose.model('Game', GameSchema);
