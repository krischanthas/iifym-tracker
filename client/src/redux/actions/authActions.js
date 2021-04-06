
import axios from 'axios';
import { USER_SIGN_OFF } from '../types';
import { getCurrentUserProfile } from './userActions';

export const login = (userInput) => dispatch => {
    axios
        .post('/api/auth/login', {
            email: userInput.email,
            password: userInput.password
        })
        .then(res => {
            dispatch(getCurrentUserProfile());
        })
        .catch(err => console.log(err));
    return true;
}


export const register = (userInput) => {
    axios
        .post('/api/auth/register', {
            name: userInput.name,
            email: userInput.email,
            password: userInput.password,
            birthDate: userInput.birthDate
        })
        .then(res => {
            console.log(res);
        })
        .catch(err => console.log(err));
}

export const signOut = () => dispatch => {
    axios
        .get('/api/auth/logout')
        .then(res => {
            dispatch({ type: USER_SIGN_OFF });

        })
        .catch(err => console.log(err));
}