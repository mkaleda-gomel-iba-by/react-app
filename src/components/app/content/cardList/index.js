import React from 'react';
import "./index.css"
import Card from "./card";

function CardList(props) {
    return (
        <div className="cards">
            {props.cards.map(card => <Card cardData={card} saveCardData={props.saveCardData} readOnly={props.readOnly}
                                           checkedControl={props.checkedControl}
                                           checked={props.checkedCardIds.includes(card.id)} key={card.id}/>)}
        </div>
    )
}

export default CardList