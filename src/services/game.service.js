const Game = require('../models/Game');
const Genre = require('../models/Genre');
const ApiError = require('../utils/exceptions/app.error');

class GameService {
  async getList({
    page = 1,
    isFreshGamesFirst = true,
    genre = 'ALL',
    gamesToShow = 9,
  }) {
    const query = {};

    if (genre && genre !== 'ALL') {
      const foundGenre = await Genre.findOne({ name: genre });

      if (!foundGenre) {
        throw ApiError.BadRequest('Genre is not found');
      }
      query.genre = foundGenre._id;
    }

    const games = await Game.find(query)
      .skip((page - 1) * gamesToShow)
      .limit(gamesToShow)
      .sort({ createdAt: isFreshGamesFirst ? -1 : 1 });

    const gamesListLength = await Game.countDocuments(query);

    return { games, gamesListLength };
  }
}

module.exports = new GameService();
