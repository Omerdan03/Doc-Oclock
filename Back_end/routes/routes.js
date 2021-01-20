const express = require('express');
const router = express.Router();

const { patient, updatePatient, createPatients, logInPatients } = require('../controllers/patient');
const { verifyToken } = require('../controllers/verifyToken');

// patient routes
router.get('/patient', verifyToken, patient);
router.put('/update-patient/:id', updatePatient);
router.post('/register-patient', createPatients);
router.post('/login-patient', logInPatients);



module.exports = router