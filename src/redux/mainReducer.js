import { combineReducers } from 'redux';
import {cardsReducer} from "./cardsReducer";
import user from "./user";

export const mainReducer = combineReducers({
    cards: cardsReducer,
    user: user
});