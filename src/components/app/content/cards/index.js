import React from 'react';
import "./index.css"
import Card from "./card";

function Cards(props) {
    return (
        <div className="cards">
            {props.cards.map(card => <Card readonly={props.readOnly} cardData={card} {...props.cardUpdate} {...props} key={card.id}/>)}
        </div>
    )
}

export default Cards