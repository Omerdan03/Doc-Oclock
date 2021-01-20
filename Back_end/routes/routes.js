const express = require('express');
const router = express.Router();

const { patient, updatePatient, createPatients, logInPatients } = require('../controllers/patient');

// patient routes
router.get('/patient', patient);
router.put('/update-patient/:id', updatePatient);
router.post('/register-patient', createPatients);
router.post('/login-patient', logInPatients);



module.exports = router