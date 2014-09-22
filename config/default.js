module.exports = {
  app: {
    port: 5100
  },
  redis: {
    port: 6379,
    host: 'localhost'
  },
  private: true,
  loglevel: 'debug',
  registries: [
    // format: hostname [, hostname, hostname, hostname]
    'localhost:5000'
  ],
  version: '1.2.0'
}