import axios from 'axios';
import { SEARCH_COMPLETE, USER_LOGGED_FOOD } from '../types';

export const searchNutritionixAPI = (searchedFood) => dispatch => {
    axios
        .post('/api/nutritionix/search', { searchedFood })
        .then(res => {
            dispatch({ type: SEARCH_COMPLETE, payload: res.data.nutritionixInstantData })
        })
        .catch(err => console.log(err));
}

export const addFoodAction = (foodInput) => dispatch => {
    axios
        .post('/api/food/', foodInput)
        .then(res => {
            dispatch({ type: USER_LOGGED_FOOD, payload: res.data.foodAdded });
        })
        .catch(err => console.log(err));
}