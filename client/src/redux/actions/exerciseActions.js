import { EXERCISE_LOG_ADDED, EXERCISE_LOGS_FETCHED, EXERCISE_LOG_REMOVED } from '../types';
import axios from 'axios';

export const addExerciseLog = (exerciseLog) => dispatch => {
    axios.post('/api/exercise/', exerciseLog)
        .then(res => {
            dispatch({ type: EXERCISE_LOG_ADDED, payload: res.data.newlyAddedExerciseLog });
        })
        .catch(err => {
            console.log(err);
        })
}

export const fetchExerciseLogs = () => dispatch => {
    axios.get('/api/exercise')
        .then(res => {
            dispatch({ type: EXERCISE_LOGS_FETCHED, payload: res.data.exerciseLogs })
        })
        .catch(err => {
            console.log(err);
        })
}

export const deleteExerciseLog = (logId) => dispatch => {
    axios
        .delete(`/api/exercise/${logId}`)
        .then(res => {
            dispatch({ type: EXERCISE_LOG_REMOVED, payload: logId });
        })
        .catch(err => console.log(err));
}