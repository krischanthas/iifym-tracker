import axios from 'axios';
import { USER_LOGS_FETCHED, USER_SIGN_ON } from '../types';


export const getCurrentUserProfile = () => dispatch => {
    axios
        .get('/api/user/profile')
        .then(res => {
            dispatch({ type: USER_SIGN_ON, payload: res.data.profile.user })
            dispatch({ type: USER_LOGS_FETCHED, payload: res.data.profile.logs });
        })
        .catch(err => console.log(err));
}

