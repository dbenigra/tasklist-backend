const User = require('../models/userModel.js');

const checkDuplicateUsername = (request, response, next) => {
  try {
    User.getUserByUsername(request.body.username, (err, result) => {
      if (result.length > 0) {
        return response.status(400).send({
          message: 'Username is already in use!',
        });
      }
      next();
    });
  } catch(error) {
    response.status(500).send({
      message: error.message,
    });
  }
};

module.exports = checkDuplicateUsername;