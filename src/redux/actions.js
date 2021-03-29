import {
    CREATE_CARD,
    ADD_FETCHED_CARDS,
    REMOVE_CARDS,
    SELECT_CARD,
    UPDATE_CARD,
} from './types';

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

export function addFetchedCards(cards) {
    return { type: ADD_FETCHED_CARDS, payload: cards };
}
