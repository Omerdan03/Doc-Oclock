const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Patient = new Schema(
    {
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        fullName: {
            type: String,
        },
        birthDay: {
            type: String,
        },
        gender: {
            type: String,
        },
        location: {
            type: String,
        },
        maritalStatus: {
            type: String,
        },
        smoking: {
            type: Boolean
        },
        alcoholAbuse: {
            type: Boolean
        },
        drugAbuse: {
            type: Boolean
        },
        disabilities: {
            type: Boolean
        },
        hypertension: {
            type: Boolean
        },
        education: {
            type: Boolean
        },
        role: {
            type: String,
            default: "patient"
        },
        password: {
            type: String
        },

        patientAppointments: [],
    },
    {
        timestamps: true,
        collection: 'patients',
    }
);
module.exports = mongoose.model('Patient', Patient);
