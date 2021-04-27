import { USER_LOGGED_FOOD, LOG_ITEM_REMOVED, UPDATED_USER_PROFILE, USER_PROFILE_FETCHED, EXERCISE_LOG_ADDED, EXERCISE_LOGS_FETCHED, EXERCISE_LOG_REMOVED } from '../types';

const initialState = {
    profile: {
        goals: null,
        logs: [],
        dailyLog: [],
        exerciseLogs: [],
        dailyExercise: []
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_PROFILE_FETCHED:
            return {
                goals: action.payload.user.goals,
                logs: action.payload.logs,
                dailyLog: action.payload.logs.filter(log => {
                    const cur = new Date();
                    const curFormatted = cur.getFullYear() + '-' + cur.getMonth() + '-' + cur.getDate();
                    const dbDate = new Date(log.createdAt);
                    const dbDateFormatted = dbDate.getFullYear() + '-' + dbDate.getMonth() + '-' + dbDate.getDate();
                    if (curFormatted === dbDateFormatted) return log;
                    return false;
                }),
            }
        case UPDATED_USER_PROFILE:
            return {
                ...state,
                goals: action.payload.goals
            }
        case USER_LOGGED_FOOD:
            return {
                ...state,
                dailyLog: [...state.dailyLog, action.payload],
                logs: [...state.logs, action.payload]
            }
        case LOG_ITEM_REMOVED:
            return {
                ...state,
                dailyLog: state.dailyLog.filter(log => log._id !== action.payload),
                logs: state.logs.filter(log => log._id !== action.payload)
            }
        case EXERCISE_LOGS_FETCHED:
            return {
                ...state,
                exerciseLogs: action.payload,
                dailyExercise: action.payload.filter(log => {
                    const cur = new Date();
                    const curFormatted = cur.getFullYear() + '-' + cur.getMonth() + '-' + cur.getDate();
                    const dbDate = new Date(log.createdAt);
                    const dbDateFormatted = dbDate.getFullYear() + '-' + dbDate.getMonth() + '-' + dbDate.getDate();
                    if (curFormatted === dbDateFormatted) return log;
                    return false;
                })
            }
        case EXERCISE_LOG_ADDED:
            return {
                ...state,
                exerciseLogs: [...state.exerciseLogs, action.payload],
                dailyExercise: [...state.dailyExercise, action.payload]
            }
        case EXERCISE_LOG_REMOVED:
            return {
                ...state,
                exerciseLogs: state.exerciseLogs.filter(log => log._id !== action.payload),
                dailyExercise: state.dailyExercise.filter(log => log._id !== action.payload),
            }
        default:
            return {
                ...state
            }
    }
}