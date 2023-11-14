const router = require('express').Router();

const authRoutes = require('./auth.routes');
const gameRoutes = require('./game.routes');

router.use('/auth', authRoutes);

router.use('/games', gameRoutes);

module.exports = router;
