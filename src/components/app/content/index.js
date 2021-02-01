import React, {useState} from 'react';
import './index.css';
import Cards from "./cards";

function Content() {
    const [readOnly, setReadOnly] = useState(false)
    const [cards, setCards] = useState([
        {id: 1, header: 'Caption', body: 'Text...', checked: false, editable: false},
        {id: 2, header: 'Caption', body: 'Text...', checked: false, editable: false},
        {id: 3, header: 'Caption', body: 'Text...', checked: false, editable: false},
        {id: 4, header: 'Caption', body: 'Text...', checked: false, editable: false},
        {id: 5, header: 'Caption', body: 'Text...', checked: false, editable: false},
        {id: 6, header: 'Caption', body: 'Text...', checked: false, editable: false},
        {id: 7, header: 'Caption', body: 'Text...', checked: false, editable: false},
        {id: 8, header: 'Caption', body: 'Text...', checked: false, editable: false},
    ])

    const editCard = (cardId, cardData) => {
        setCards(
            cards.map(card => {
                if (card.id === cardId) {
                    card = cardData
                }
                return card
            })
        )
    }

    return (
        <div className="content content-layout">
            <div className="container">
                <div className="cards-panel-layout">
                    <label><input type="checkbox" onInput={() => setReadOnly(!readOnly)}/>Readonly</label>
                </div>
                <Cards readonly={readOnly} cards={cards} editCard={editCard}/>
            </div>
        </div>
    )
}

export default Content