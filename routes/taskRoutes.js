const verifyToken = require('../middleware/authJwt.js');
const taskController = require('../controllers/taskController.js');

module.exports = function(app) {
  app.use(function(request, response, next) {
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, Content-Type, Accept'
    );
    next();
  });
  app.get('/tasks', verifyToken, taskController.getUserTasks);
  app.post('/task', verifyToken, taskController.addTask);
  app.delete('/task/:id', verifyToken, taskController.deleteTask);
}