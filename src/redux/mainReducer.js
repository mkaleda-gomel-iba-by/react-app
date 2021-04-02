import { combineReducers } from 'redux';
import {cardsReducer} from "./cardsReducer";
import user from "./features/user";

export const mainReducer = combineReducers({
    cards: cardsReducer,
    user: user
});