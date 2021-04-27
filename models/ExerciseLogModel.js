const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseLogModel = new Schema({
    userId: {
        type: String,
        isRequired: true
    },
    exerciseName: {
        type: String,
        isRequired: true
    },
    exerciseDescription: {
        type: String
    },
    totalSets: {
        type: Number
    },
    totalReps: {
        type: Number
    },
    weight: {
        type: String
    }

}, { timestamps: true })

module.exports = mongoose.model('Exercise', ExerciseLogModel);