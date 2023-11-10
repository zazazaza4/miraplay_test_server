const Mongoose = require('mongoose');

const GenreSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: [
      'ALL',
      'FREE',
      'MOBA',
      'SHOOTERS',
      'LAUNCHERS',
      'MMORPG',
      'STRATEGY',
      'FIGHTING',
      'RACING',
      'SURVIVAL',
      'ONLINE',
    ],
  },
});

const Genre = Mongoose.model('Genre', GenreSchema);

module.exports = Genre;
