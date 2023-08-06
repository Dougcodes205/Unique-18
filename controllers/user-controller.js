const User = require('../models/User');

const userController = {
  // get all users
  getUsers(req, res) {
    try {
      // Fetch all users from the User model.
      const users = User.getAllUsers();
      res.json(users);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // create a new user
  createUser(req, res) {
    try {
      const { username, email } = req.body;
      const user = User.createUser(username, email);
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

};

module.exports = userController;