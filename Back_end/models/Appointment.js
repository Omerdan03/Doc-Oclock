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
        dateTimeSchedule: {
            type: Number,
            default: 1
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
        locatoin: {
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
