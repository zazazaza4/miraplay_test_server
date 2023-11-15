const mongoose = require('mongoose');

const Game = require('../models/Game');
const keys = require('./keys');

const games = require('../_data/games.json');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(keys.db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (keys.app.mode === 'development') {
      await seedDB();
    }
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`.red.bold);
  }
};

const seedDB = async () => {
  await Game.deleteMany({});
  await Game.insertMany(games);
};

module.exports = connectDB;
