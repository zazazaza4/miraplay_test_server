const Game = require('../models/Game');

class GameService {
  async getList({
    page = 1,
    isFreshGamesFirst = true,
    genre = 'ALL',
    gamesToShow = 9,
  }) {
    const query = {};

    if (genre && genre !== 'ALL') {
      query.genre = genre;
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
