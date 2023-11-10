const Mongoose = require('mongoose');

const GameSchema = new Mongoose.Schema({
  commonGameName: {
    type: String,
    required: true,
  },
  gameDescription: {
    type: String,
    required: true,
  },
  gameImage: {
    type: String,
    required: true,
  },
  genre: {
    type: Schema.Types.ObjectId,
    ref: 'Genre',
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
