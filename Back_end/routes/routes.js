const express = require('express');
const router = express.Router();

const { user, updateUser } = require('../controllers/user');
// const { register, profile } = require('../controllers/auth');

// user routes
// router.put('/update-user/:id', updateUser);
// router.get('/', register)


module.exports = router