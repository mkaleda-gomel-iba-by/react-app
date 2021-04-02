import { combineReducers } from 'redux';
import {cardsReducer} from "./cardsReducer";

export const mainReducer = combineReducers({
    cards: cardsReducer
});