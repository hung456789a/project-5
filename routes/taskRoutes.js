const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.render('index', { tasks });
});

router.post('/add', async (req, res) => {
  const newTask = new Task({ title: req.body.title });
  await newTask.save();
  res.redirect('/');
});

router.post('/done/:id', async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, { completed: true });
  res.redirect('/');
});

router.post('/delete/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

module.exports = router;