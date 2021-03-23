import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const CardsContext = React.createContext(null);

function CardsProvider({ children }) {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        axios(
            'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
        )
            .then((response) =>
                setCards(
                    response.data.slice(0, 15).map((obj) => {
                        return {
                            id: uuidv4(),
                            header: obj['Name'],
                            body: obj['About'],
                        };
                    })
                )
            )
            .catch((reject) => console.log(`Something went wrong: ${reject}`));
    }, []);

    const [checkedCardIds, setCheckedCardIds] = useState([]);
    const getCheckedIndex = (item) =>
        checkedCardIds.findIndex((checkedCardId) => checkedCardId === item);
    const checkedControl = {
        selectCard(cardId) {
            const tempCheckedCardIds = [...checkedCardIds];
            const index = getCheckedIndex(cardId);
            if (index !== -1) {
                tempCheckedCardIds.splice(index, 1);
                setCheckedCardIds(tempCheckedCardIds);
            } else {
                setCheckedCardIds([...checkedCardIds, cardId]);
            }
        },
        removeCheckedCard(cardId) {
            const tempCheckedCardIds = [...checkedCardIds];
            const index = getCheckedIndex(cardId);
            if (index !== -1) {
                tempCheckedCardIds.splice(index, 1);
                setCheckedCardIds(tempCheckedCardIds);
            }
        },
    };

    const deleteCards = () => {
        setCards(cards.filter((card) => !checkedCardIds.includes(card.id)));
        setCheckedCardIds([]);
    };
    const saveCardData = (cardId, tempState) => {
        let card = cards.find((card) => card.id === cardId);
        card.header = tempState.header;
        card.body = tempState.body;
        setCards(cards);
    };
    const addCard = (cardData) => {
        const generatedId = uuidv4();
        setCards([...cards, { id: generatedId, ...cardData }]);
        setCheckedCardIds([generatedId]);
    };

    const getCardsCount = () => cards.length;

    const store = {
        cards,
        checkedCardIds,
        checkedControl,
        deleteCards,
        saveCardData,
        addCard,
        getCardsCount,
    };

    return <CardsContext.Provider value={store}>{children}</CardsContext.Provider>;
}

export default CardsProvider