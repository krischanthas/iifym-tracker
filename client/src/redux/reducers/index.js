import { combineReducers } from "redux";
import auth from "./authReducer";
import profile from './userReducer'
import searched from './searchReducer';


export default combineReducers({ auth, profile, searched });