const db = require('../dbconfig.js');

const Task = {
  getAllTasks: function(callback) {
    return db.query('SELECT * FROM tasks', callback);
  },
  getUserTasks: function(userId, callback) {
    return db.query('SELECT * FROM tasks WHERE user_id = ?', userId, callback);
  },
  getTaskById: function(taskId, callback) {
    return db.query('SELECT * FROM tasks WHERE task_id = ?', taskId, callback);
  },
  addTask: function(task, callback) {
    return db.query('INSERT INTO tasks (user_id, note) VALUES (?, ?)', [task.user_id, task.note], callback);
  },
  deleteTask: function(task, callback) {
    return db.query('DELETE FROM tasks WHERE task_id = ? AND user_id = ?', [task.task_id, task.user_id], callback);
  },
}

module.exports = Task;