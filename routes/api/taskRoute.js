const express = require('express');
const uuid = require('uuid');
let tasklist = require('../../data/todo');

const router = express.Router();

//Get all data
router.get('/', (req, res) => {
  try {
    res.send(tasklist);
  } catch (err) {
    res.status(500).send('Server errror');
  }
});

//route Get api/User/:id
//desc GET user by id
//access public
router.get('/:id', (req, res) => {
  try {
    const task = tasklist.find((t) => t.id == req.params.id);
    if (!task) {
      res.status(404).send('User not found');
    }
    res.send(task);
  } catch (err) {
    res.status(500).send('Server errror');
  }
});

//route post api/user
//desc insert user
//access public
router.post('/', (req, res) => {
  try {
    const newUser = {
      id: uuid.v4(),
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,

    };
    tasklist.push(newUser);
    res.send(newUser);
  } catch (err) {
    res.status(500).send('Server errror');
  }
});

//route delete api/user/:id
//desc delete user by id
//access public
router.delete('/', (req, res) => {
  try {
    // find the element
    const user = tasklist.find((tk) => tk.id == req.body.id);
    if (!user) {
      return res.status(404).json({ msg: 'Task not found' });
    }

    tasklist = tasklist.filter(function (obj) {
      return obj.id !== user.id;
    });
    res.json(tasklist);

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// //route put  api/users/
// //desc update users
// //access public
router.put('/', (req, res) => {
  try {
    const user2 = tasklist.find((tk) => tk.id == req.body.id);

    if (!user2) {
      return res.status(404).json({ msg: 'Task not found' });
    }
    const id = req.body.id;
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Password = req.body.Password;

    taskList = tasklist.filter(function (obj) {
      if (obj.id == id) {
        obj.Email = Email;
        obj.Name = Name;
        obj.Password = Password;
      }
      return obj;
    });

    res.send(user2);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
