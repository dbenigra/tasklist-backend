const db = require('../dbconfig.js');

const User = {
  addUser: function(user, callback) {
    return db.query('INSERT INTO users (username, password) VALUES (?, ?)', [user.username, user.password], callback);
  },
  getUserByUsername: function(username, callback) {
    return db.query('SELECT * FROM users WHERE username = ?', username, callback);
  },
};

module.exports = User;