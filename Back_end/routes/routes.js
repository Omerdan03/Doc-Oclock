const express = require('express');
const router = express.Router();

const { doctor, updateDoctor, createDoctor, logInDoctor } = require('../controllers/doctors');

// patient routes
router.get('/doctor', doctor);
router.put('/update-doctor/:id', updateDoctor);
router.post('/register-doctor', createDoctor);
router.post('/login-doctor', logInDoctor);

const { patient, updatePatient, createPatients, logInPatients } = require('../controllers/patient');
const { appointment, updateAppointment, createAppointment } = require('../controllers/appointment');
const { verifyToken } = require('../controllers/verifyToken');

// patient routes
router.get('/patient', verifyToken, patient);
router.put('/update-patient/:id', updatePatient);
router.post('/register-patient', createPatients);
router.post('/login-patient', logInPatients);

//appointment routes
router.put('/update-appointment/:id', updateAppointment);
router.post('/create-appointment', createAppointment);

module.exports = router