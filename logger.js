const winston = require('winston');
const { LogstashTransport } = require('winston-logstash-transport');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new LogstashTransport({
      port: 5000,
      host: 'logstash',              // Tên service hoặc container Logstash
      node_name: 'logstash',
      max_connect_retries: 10,       // ✅ Tự động thử lại kết nối
      timeout_connect_retries: 10000 // ✅ chờ tối đa 10s mỗi lần
    }),
    new winston.transports.Console({
      format: winston.format.simple()
    })
  ]
});

module.exports = logger;
