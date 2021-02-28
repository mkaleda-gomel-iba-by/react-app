import React from 'react';
import "./index.css"
import Card from "./card";

function CardList(props) {
    return (
        <div className="cards">
            {props.cards.map(card => Card({
                isLoading: props.firstTimeLoadedIds.includes(card.id),
                checked: props.checkedCardIds.includes(card.id),
                cardData: card,
                key: card.id,
                ...props
            }))}
        </div>
    )
}

export default CardList