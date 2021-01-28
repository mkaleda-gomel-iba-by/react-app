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

    const cardUpdate = {
        editCard(cardId) {
            setCards(
                cards.map(card => {
                    if (card.id === cardId) {
                        card = {...card, editable: true, checked: false}
                    }
                    return card
                })
            )
        },
        selectCard(cardId) {
            setCards(
                cards.map(card => {
                    if (card.id === cardId) {
                        card = {...card, checked: !card.checked}
                    }
                    return card
                })
            )
        },
        fillHeader(cardId, event) {
            setCards(
                cards.map(card => {
                    if (card.id === cardId) {
                        card = {...card, header: event.target.value}
                    }
                    return card
                })
            )
        },
        fillBody(cardId, event) {
            setCards(
                cards.map(card => {
                    if (card.id === cardId) {
                        card = {...card, body: event.target.value}
                    }
                    return card
                })
            )
        },
        cancelEditing(cardId) {
            setCards(
                cards.map(card => {
                    if (card.id === cardId) {
                        card = {...card, editable: false}
                    }
                    return card
                })
            )
        },
        restoreCardData(cardId, backupData) {
            setCards(
                cards.map(card => {
                    console.log(cardId)
                    if (card.id === cardId) {
                        this.cancelEditing(cardId)
                        card = {...card, ...backupData, editable: false}
                        console.log(card)
                    }
                    return card
                })
            )
        }
    }

    return (
        <div className="content content-layout">
            <div className="container">
                <div className="cards-panel-layout">
                    <label><input type="checkbox" onInput={() => setReadOnly(!readOnly)}/>Readonly</label>
                </div>
                <Cards readOnly={readOnly} cards={cards} cardUpdate={cardUpdate}/>
            </div>
        </div>
    )
}

export default Content