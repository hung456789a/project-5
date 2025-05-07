// logger.js
const winston = require('winston');
const { LogstashTransport } = require('winston-logstash-transport');

const logger = winston.createLogger({
  transports: [
    new LogstashTransport({
      port: 5000,
      node_name: 'my-node-app',
      host: 'logstash'
    })
  ]
});

module.exports = logger;
