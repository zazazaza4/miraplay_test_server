module.exports = {
  app: {
    name: 'Miraplay Test Server',
    apiURL: `${process.env.BASE_API_URL}`,
    clientURL: process.env.CLIENT_URL,
    mode: process.env.NODE_ENV,
  },
  port: process.env.PORT || 5000,
  db: {
    url: process.env.MONGO_URL,
  },
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessTokenLife: '7d',
    refreshTokenLife: '7d',
  },
};
