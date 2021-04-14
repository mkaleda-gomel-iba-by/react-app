import {CREATE_CARD, FETCH_CARDS, REMOVE_CARDS, SELECT_CARD, UPDATE_CARD, CHANGE_READONLY_MODE} from './types';

const initialState = {
    cards: [],
    checkedCardIds: [],
    readOnly: false
};

const removeCards = (state) => {
    const filteredCards = state.cards.filter(
        (card) => !state.checkedCardIds.includes(card.id)
    );
    return { ...state, cards: filteredCards, checkedCardIds: [] };
};

const updateCard = (state, newCard) => {
    let card = state.cards.find((card) => card.id === newCard.id);
    card.header = newCard.header;
    card.body = newCard.body;
    return state;
};

const cardsSelection = (state, cardId) => {
    const item = state.checkedCardIds.find(
        (checkedCardId) => checkedCardId === cardId
    );

    const newCheckedCardIds = item
        ? state.checkedCardIds.filter((checkedCardId) => checkedCardId !== item)
        : [...state.checkedCardIds, cardId];

    return { ...state, checkedCardIds: newCheckedCardIds };
};

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CARD:
            return { ...state, cards: [...state.cards, action.payload] };
        case REMOVE_CARDS:
            return removeCards(state);
        case UPDATE_CARD:
            return updateCard(state, action.payload);
        case SELECT_CARD:
            return cardsSelection(state, action.payload);
        case FETCH_CARDS:
            return {...state, cards: action.payload, checkedCardIds: []};
        case CHANGE_READONLY_MODE:
            return {...state, readOnly: !state.readOnly};
        default:
            return state;
    }
};