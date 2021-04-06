const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String,
        required: true,
        max: 225,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    birthDate: {
        type: Date
    },
    goals: {
        nutrition: {
            fat: { type: Number },
            carbs: { type: Number },
            protein: { type: Number }
        }
    },
    token: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);