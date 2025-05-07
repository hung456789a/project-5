const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const logger = require('../logger');

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  logger.info('📥 Viewed all tasks');
  res.render('index', { tasks });
});

router.post('/add', async (req, res) => {
  const newTask = new Task({ title: req.body.title });
  await newTask.save();
  logger.info('📝 New task added', { title: req.body.title });
  res.redirect('/');
});

router.post('/done/:id', async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, { completed: true });
  logger.info('✅ Task marked as done', { taskId: req.params.id });
  res.redirect('/');
});

router.post('/delete/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  logger.info('❌ Task deleted', { taskId: req.params.id });
  res.redirect('/');
});

module.exports = router;