import { combineReducers } from "redux";
import auth from "./authReducer";
import profile from './userReducer'


export default combineReducers({ auth, profile });