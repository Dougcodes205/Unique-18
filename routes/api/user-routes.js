const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-controller');

// get all users
router.get('/', userController.getUsers);

// create a new user
router.post('/', userController.createUser);


module.exports = router;