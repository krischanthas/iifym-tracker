const axios = require('axios');
require('dotenv').config();

const callNutritionix = axios.create({
    baseURL: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    headers: {
        'x-app-id': process.env.NUTRITIONIX_API_ID,
        'x-app-key': process.env.NUTRITIONIX_API_KEY,
        'Content-Type': 'application/JSON',
        'x-remote-user-id': 0
    }
});

module.exports = callNutritionix;
