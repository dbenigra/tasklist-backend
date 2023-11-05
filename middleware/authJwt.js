const jwt = require('jsonwebtoken');
const config = require('../config.js');

const verifyToken = (request, response, next) => {
  try {
    const token = request.session.token;
    if (!token) {
      return response.status(403).send({
        message: 'No token provided!',
      });
    }
    jwt.verify(token, config.secretKey, (err, decoded) => {
      if (err) {
        return response.status(401).send({
          message: 'Unauthorized!',
        });
      }
      next();
    })
  } catch(error) {
    response.status(500).send({
      message: error.message,
    });
  }
};

module.exports = verifyToken;