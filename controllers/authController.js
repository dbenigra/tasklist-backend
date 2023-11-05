const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config.js');
const User = require('../models/userModel.js');

exports.signup = async (request, response) => {
  try {
    const user = {
      username: request.body.username,
      password: bcrypt.hashSync(request.body.password, 8),
    };
    User.addUser(user, (err, result) => {
      response.status(201).send({
        message: 'User registered successfully',
      });
    });
  } catch(error) {
    response.status(500).send({
      message: error.message,
    });
  }
};

exports.login = async (request, response) => {
  try {
    // check if user exists
    User.getUserByUsername(request.body.username, (err, result) => {
      if (result.length == 0) {
        return response.status(404).send({
          message: 'User not found.',
        });
      }

      const user = result[0];
      const isPassValid = bcrypt.compareSync(
        request.body.password,
        user.password,
      );

      // check if password is correct
      if (!isPassValid) {
        return response.status(401).send({
          message: 'Password is invalid!',
        });
      }

      // generate token and store
      const token = jwt.sign(
        { id: user.user_id },
        config.secretKey,
        { expiresIn: '24h' }
      );
      request.session.token = token;
      request.session.user_id = user.user_id;

      response.status(200).send({
        message: 'Logged in successfully!',
      });
    });
  } catch(error) {
    response.status(500).send({
      message: error.message,
    });
  }
};

exports.logout = async (request, response) => {
  try {
    request.session = null;
    return response.status(200).send({
      message: "You've logout successfully!"
    });
  } catch(error) {
    this.next(error);
  }
};