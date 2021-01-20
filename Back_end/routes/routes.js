const express = require('express');
const router = express.Router();

const { doctor, updateDoctor, createDoctor, logInDoctor } = require('../controllers/doctors');

// patient routes
router.get('/doctor', doctor);
router.put('/update-doctor/:id', updateDoctor);
router.post('/register-doctor', createDoctor);
router.post('/login-doctor', logInDoctor);



module.exports = router