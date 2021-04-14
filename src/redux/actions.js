import {
    CREATE_CARD,
    FETCH_CARDS,
    REMOVE_CARDS,
    SELECT_CARD,
    UPDATE_CARD,
    CHANGE_READONLY_MODE,
} from './types';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export function createCard(card) {
    return { type: CREATE_CARD, payload: card };
}

export function removeCards(cardIds) {
    return { type: REMOVE_CARDS, payload: cardIds };
}

export function updateCard(card) {
    return { type: UPDATE_CARD, payload: card };
}

export function selectCard(cardId) {
    return { type: SELECT_CARD, payload: cardId };
}

export function fetchCards() {
    return async (dispatch) => {
        const response = await axios(
            'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
        );
        const data = response.data.slice(0, 15).map(({ Name, About }) => {
            return {
                id: uuidv4(),
                header: Name,
                body: About,
            };
        });
        dispatch({ type: FETCH_CARDS, payload: data });
    };
}

export function changeReadOnlyMode() {
    return { type: CHANGE_READONLY_MODE };
}
