import React, {useState} from 'react';
import './index.css';
import CardList from "./cardList";
import AddCardModal from "./AddCardModal";
import CardsPanel from "./CardsPanel";

function Content() {
    const [readOnly, setReadOnly] = useState(false);
    const defaultData = {header: 'Caption', body: 'Text...'}
    const [cards, setCards] = useState([
        {id: 1, ...defaultData},
        {id: 2, ...defaultData},
        {id: 3, ...defaultData},
        {id: 4, ...defaultData},
        {id: 5, ...defaultData},
        {id: 6, ...defaultData},
        {id: 7, ...defaultData},
        {id: 8, ...defaultData}
    ]);

    const [checkedCardIds, setCheckedCardIds] = useState([]);

    const getCheckedIndex = (item) => checkedCardIds.findIndex(checkedCardId => checkedCardId === item);

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
        }
    }

    const [addCardModalVisible, setAddCardModalVisible] = useState(false)
    const toggleAddCardModal = () => setAddCardModalVisible(prevState => !prevState)

    function deleteCards() {
        setCards(cards.filter(card => !checkedCardIds.includes(card.id)));
        setCheckedCardIds([]);
    }

    function saveCardData(cardId, tempState) {
        let card = cards.find(card => card.id === cardId);
        card.header = tempState.header;
        card.body = tempState.body;
        setCards(cards);
    }

    function addCard(cardData) {
        const generatedId = cards.map((item) => item.id).sort((a, b) => b - a)[0] + 1
        setCards([...cards, {id: generatedId, ...cardData}])
    }

    return (
        <div className="content content-layout">
            <div className="container">
                <CardsPanel toggleAddCardModal={toggleAddCardModal}
                            deleteCards={deleteCards}
                            setReadOnly={setReadOnly}
                            readOnly={readOnly}
                            isSelected={checkedCardIds.length === 0}/>
                <AddCardModal addCardDataVisible={addCardModalVisible} addCard={addCard}/>
                <CardList readOnly={readOnly}
                          cards={cards}
                          checkedControl={checkedControl}
                          checkedCardIds={checkedCardIds}
                          saveCardData={saveCardData}/>
            </div>
        </div>
    )
}

export default Content