const router = require('express').Router()

const authRoutes = require('./auth.routes')
const userRoutes = require('./user.routes')
const gameRoutes = require('./game.routes')

router.use('/auth', authRoutes)

router.use('/user', userRoutes)

router.use('/game', gameRoutes)

module.exports = router
