import { CREATE_CARD, REMOVE_CARDS, SELECT_CARD, UPDATE_CARD } from './types';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

async function fetchCards() {
    const response = await axios(
        'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
    );
    return await response.data.slice(0, 15).map((obj) => {
        return {
            id: uuidv4(),
            header: obj['Name'],
            body: obj['About'],
        };
    });
}

const initialState = {
    checkedCardIds: [],
};
initialState.cards = fetchCards();
initialState.cards = [
    { id: 1, header: 'sdfas', body: 'asdfas' },
    { id: 2, header: 'sdfas', body: 'asdfas' },
];

const removeCards = (state) => {
    const filteredCards = state.cards.filter(
        (card) => !state.checkedCardIds.includes(card.id)
    );
    return { cards: filteredCards, checkedCardIds: [] };
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
        default:
            return state;
    }
};