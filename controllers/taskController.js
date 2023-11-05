const Task = require('../models/taskModel.js');

exports.getUserTasks = async (request, response) => {
  try {
    Task.getUserTasks(request.session.user_id, (err, result) => {
      response.send(result);
    });
  } catch(error) {
    response.status(500).send({
      message: error.message,
    });
  }
};

exports.addTask = async (request, response) => {
  try {
    const task = {
      user_id: request.session.user_id,
      note: request.body.note,
    };
    Task.addTask(task, (err, result) => {
      response.status(201).send({ message: 'Added task sucessfully.'});
    });
  } catch(error) {
    response.status(500).send({
      message: error.message,
    });
  }
};

exports.deleteTask = async (request, response) => {
  try {
    // check if task exists
    Task.getTaskById(request.params.id, (err, result) => {
      if (result.length == 0) {
        return response.status(404).send({ message: 'Task does not exist.' });
      }
    });

    const task = {
      task_id: request.params.id,
      user_id: request.session.user_id,
    };

    // proceed to delete task
    Task.deleteTask(task, (err, result) => {
      if (!result) {
        return response.status(401).send({ message: 'Unauthorized to delete task.'});
      }
      response.send({ message: 'Deleted task successfully.' });
    });
  } catch(error) {
    response.status(500).send({
      message: error.message,
    });
  }
};