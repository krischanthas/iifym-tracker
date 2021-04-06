const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseLogModel = new Schema({
    user_id: {
        type: String,
        isRequired: true
    },
    workout_description: {
        type: String
    },
    workout_exercises: {
        type: Array
    },
    calories_burned: {
        type: Number
    }

}, { typestamp: true })

module.exports = mongoose.model('ExerciseLogModel', ExerciseLogModel);