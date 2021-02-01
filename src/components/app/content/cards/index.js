import React from 'react';
import "./index.css"
import Card from "./card";

function Cards(props) {
    return (
        <div className="cards">
            {props.cards.map(card => {
                return <Card cardData={card} editCard={props.editCard} readOnly={props.readonly} key={card.id}/>
            })}
        </div>
    )
}

export default Cards