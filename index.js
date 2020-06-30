const express = require('express');
const taskRoute = require('./routes/api/taskRoute');

const app = express();

app.use(express.json());

app.use('/api/tasks', taskRoute);

app.listen(5000, () => {
  console.log('server started');
});