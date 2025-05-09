require('dotenv').config();
const http = require('http'); 
const winston = require('winston'); //library for logstash
const { LogstashTransport } = require('winston-logstash-transport');  //library for logstash
const express = require('express');     // libary for mongodb connection
const mongoose = require('mongoose');   // libary for mongodb connection
const bodyParser = require('body-parser');   // libary for mongodb connection
const taskRoutes = require('./routes/taskRoutes');    // libary for mongodb connection
const logger = require('./logger');
//indexing into mongodb
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', taskRoutes);

//Connect to mongodb
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(3000, () => {
        logger.info('🚀 Server running on http://localhost:3000');
        console.log('Server running on http://localhost:3000');
  });
})
  .catch(err => {
    logger.error('❌ MongoDB connection failed', { error: err});
    console.log(err)});
