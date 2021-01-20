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
            type: String
        },
        alcoholAbuse: {
            type: String
        },
        drugAbuse: {
            type: String
        },
        disabilities: {
            type: String
        },
        education: {
            type: String
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
