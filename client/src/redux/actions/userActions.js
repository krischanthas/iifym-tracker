import axios from 'axios';
import { USER_SIGN_ON, UPDATED_USER_PROFILE, USER_PROFILE_FETCHED } from '../types';


export const getCurrentUserProfile = () => dispatch => {
    axios
        .get('/api/user/profile')
        .then(res => {
            dispatch({ type: USER_SIGN_ON, payload: res.data.profile.user });
            dispatch({ type: USER_PROFILE_FETCHED, payload: res.data.profile });
        })
        .catch(err => console.log(err));
}

export const updateUserGoals = (userGoals) => dispatch => {
    axios
        .patch('/api/user/profile', userGoals)
        .then(res => {
            dispatch({ type: UPDATED_USER_PROFILE, payload: res.data.updatedUser });
        })
        .catch(err => console.log(err));
}