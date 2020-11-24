import { combineReducers } from "redux";
import {countriesReducer} from './countriesReducer'
import { appReducer } from "./appReducer";

export const rootReducer = combineReducers({
    countries: countriesReducer,
    app: appReducer,
})