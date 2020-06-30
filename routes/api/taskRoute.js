const express = require('express');
const uuid = require('uuid');
let tasklist = require('../../data/todo');

const router = express.Router();

//route Get api/tasks
//desc GET all task
//access public
router.get('/api/tasks', (req, res) => {
  try {
    res.send(tasklist);
  } catch (err) {
    res.status(500).send('Server errror');
  }
});


module.exports = router;
