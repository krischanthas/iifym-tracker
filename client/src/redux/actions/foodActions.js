import axios from 'axios';
import { SEARCH_COMPLETE, SEARCH_ITEM_SELECTED, SEARCH_ITEM_DESELECTED, USER_LOGGED_FOOD, LOG_ITEM_REMOVED } from '../types';

export const searchNutritionixAPI = (searchedFood) => dispatch => {
    axios
        .post('/api/nutritionix/search', { searchedFood })
        .then(res => {
            dispatch({ type: SEARCH_COMPLETE, payload: res.data.nutritionixInstantData })
        })
        .catch(err => console.log(err));
}
export const searchNutritionixAPIForNutrition = (searchedFood) => dispatch => {
    axios
        .post('/api/nutritionix/nutrients', { searchedFood })
        .then(res => {
            dispatch({ type: SEARCH_ITEM_SELECTED, payload: res.data.nutritionixNutrientsData })
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
export const deleteFoodAction = (logId) => dispatch => {
    axios
        .delete(`/api/food/${logId}`)
        .then(res => {
            dispatch({ type: LOG_ITEM_REMOVED, payload: logId });
        })
        .catch(err => console.log(err));
}

/**
 * This action will clear state.searched object
 */
export const searchItemDeselect = () => dispatch => {
    dispatch({ type: SEARCH_ITEM_DESELECTED });
}