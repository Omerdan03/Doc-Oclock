const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Appointment = new Schema(
    {
        doctor_id: {
            type: String,
        },
        patient_id: {
            type: String,
        },
        appointmentCreationDay: {
            type: Date,
        },
        dateTimeAppointment: {
            type: Date,
        },
        realTimeStart: {
            type: Number,
        },
        duration: {
            type: String,
        },
        firstVisit: {
            type: Boolean,
        },
        symptoms: {
            type: String,
        },
        status: {
            type: String,
        },
        location: {
            type: String
        },
        paymentDateTime: {
            type: String
        },
        doctorSummary: {
            type: Array
        }

    },
    {
        timestamps: true,
        collection: 'appointments',
    }
);
module.exports = mongoose.model('Appointment', Appointment);
