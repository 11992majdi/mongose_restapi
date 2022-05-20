import {combineReducers} from "redux";
import { contactReducer } from "./contact";

export const rootReducer=combineReducers({
    contactReducer,
})