import React from 'react';
import "./index.css"
import Card from "./card";

function Cards(props) {
    return (
        <div className="cards">
            {props.cards.map(card => <Card readonly={props.readOnly} cardData={card} key={card.id}/>)}
        </div>
    )
}

export default Cards