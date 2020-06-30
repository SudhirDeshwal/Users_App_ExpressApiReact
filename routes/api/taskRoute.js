const express = require('express');
const uuid = require('uuid');
let tasklist = require('../../data/todo');

const router = express.Router();

//route Get api/tasks
//desc GET all task
//access public
router.get('/', (req, res) => {
  try {
    res.send(tasklist);
  } catch (err) {
    res.status(500).send('Server errror');
  }
});

//route Get api/tasks/:id
//desc GET task by id
//access public
router.get('/:id', (req, res) => {
  try {
    const task = tasklist.find((t) => t.id == req.params.id);
    if (!task) {
      res.status(404).send('task not found');
    }
    res.send(task);
  } catch (err) {
    res.status(500).send('Server errror');
  }
});

//route post api/tasks
//desc insert task
//access public
router.post('/', (req, res) => {
  try {
    const newTask = {
      id: uuid.v4(),
      title: req.body.title,
      done: req.body.done,
    };
    tasklist.push(newTask);
    res.send(newTask);
  } catch (err) {
    res.status(500).send('Server errror');
  }
});

//route delete api/tasks/:id
//desc delete task by id
//access public
router.delete('/', (req, res) => {
  try {
    // find the element
    const task = tasklist.find((tk) => tk.id == req.body.id);
    if (!task) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    tasklist = tasklist.filter(function (obj) {
      return obj.id !== task.id;
    });
    res.json(tasklist);

    //res.json({ msg: 'Task deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// //route put  api/tasks/
// //desc update task
// //access public
router.put('/', (req, res) => {
  try {
    const task2 = tasklist.find((tk) => tk.id == req.body.id);

    if (!task2) {
      return res.status(404).json({ msg: 'Task not found' });
    }
    const id = req.body.id;
    const title = req.body.title;
    const done = req.body.done;
    taskList = tasklist.filter(function (obj) {
      if (obj.id == id) {
        obj.title = title;
        obj.done = done;
      }
      return obj;
    });

    res.send(task2);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
