const verifySignUp = require('../middleware/verifySignUp.js');
const authController = require('../controllers/authController.js');
module.exports = function(app) {
  app.use(function(request, response, next) {
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, Content-Type, Accept'
    );
    next();
  });
  app.post('/signup', verifySignUp, authController.signup);
  app.post('/login', authController.login);
  app.post('/logout', authController.logout);
}