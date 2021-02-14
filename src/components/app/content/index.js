import React, {useState} from 'react';
import './index.css';
import CardList from "./cardList";
import Checkbox from "./checkbox";

function Content() {
    const [readOnly, setReadOnly] = useState(false)
    const [cards, setCards] = useState([
        {id: 1, header: 'Caption', body: 'Text...'},
        {id: 2, header: 'Caption', body: 'Text...'},
        {id: 3, header: 'Caption', body: 'Text...'},
        {id: 4, header: 'Caption', body: 'Text...'},
        {id: 5, header: 'Caption', body: 'Text...'},
        {id: 6, header: 'Caption', body: 'Text...'},
        {id: 7, header: 'Caption', body: 'Text...'},
        {id: 8, header: 'Caption', body: 'Text...'},
    ])

    function saveCardData(cardId, tempState) {
        let card = cards.find(card => card.id === cardId)
        card.header = tempState.header
        card.body = tempState.body
        setCards(cards)
    }

    return (
        <div className="content content-layout">
            <div className="container">
                <div className="cards-panel cards-panel-layout">
                    <Checkbox setChecked={setReadOnly} checked={readOnly} label={'Readonly'}/>
                    <button className="delete-cards">Delete cards</button>
                </div>
                <CardList readOnly={readOnly} cards={cards} saveCardData={saveCardData}/>
            </div>
        </div>
    )
}

export default Content