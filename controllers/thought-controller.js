const User = require('../models/User');

const thoughtController = {
  // get all thoughts
  getThoughts(req, res) {
    try {
      // Fetch all thoughts from the User model.
      const thoughts = User.getAllThoughts();
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // create a thought
  createThought(req, res) {
    try {
      const { thoughtText, username } = req.body;
      const thought = User.createThought(thoughtText, username);
      res.json(thought);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

};

module.exports = thoughtController;