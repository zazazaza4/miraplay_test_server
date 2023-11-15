require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const mongoSanitize = require('express-mongo-sanitize');
const colors = require('colors');
const morgan = require('morgan');

const keys = require('./configs/keys');
const routes = require('./routes');
const connectDB = require('./configs/db');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
connectDB();

if (keys.app.mode === 'development') {
  app.use(morgan('dev'));
}

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(mongoSanitize());
app.use(helmet());
app.use(xss());
app.use(hpp());
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100,
});
app.use(limiter);

app.use(routes);
app.use(errorMiddleware);

app.listen(keys.port, () => {
  console.log(
    `Server running in ${keys.app.mode} mode on port ${keys.port}`.yellow.bold
  );
});
