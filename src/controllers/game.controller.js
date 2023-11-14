const gameService = require('../services/game.service');

class GameController {
  async getList(req, res, next) {
    try {
      const result = await gameService.getList(req.body);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new GameController();
