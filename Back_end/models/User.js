const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema(
    {
        email: {
            type: String,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        doctor: {
            type: Boolean,
            default: false,
        },
        patient: {
            type: Boolean,
            default: false,
        },
        doctorSchedule: [],
        patientAppointments: [],

    },
    {
        timestamps: true,
        collection: 'users',
    }
);
module.exports = mongoose.model('User', userSchema);
