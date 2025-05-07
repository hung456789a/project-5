const winston = require('winston');
const { LogstashTransport } = require('winston-logstash-transport');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(), // Logstash prefers JSON
  transports: [
    new LogstashTransport({
      port: 5000,
      node_name: 'my-node-app',
      host: 'logstash'
    }),
    new winston.transports.Console({          // ✅ thêm transport console
      format: winston.format.simple()         // hoặc format khác bạn muốn
    })
  ]
});

module.exports = logger;
