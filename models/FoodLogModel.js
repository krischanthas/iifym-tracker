const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodLogModel = new Schema({
    itemName: {
        type: String,
        isRequired: true
    },
    description: {
        type: String,
    },
    servingSize: {
        type: String,
    },
    calories: {
        type: Number
    },
    protein: {
        type: Number
    },
    fat: {
        type: Number
    },
    carbs: {
        type: Number
    },
    userId: {
        type: String,
        isRequired: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Log', FoodLogModel);