import React from 'react';
import "./index.css"
import WithLoadingDelay from "./WithLoadingDelay";
import Card from "./card";

function CardList(props) {
    return (
        <div className="cards">
            {props.cards.map(card => WithLoadingDelay(Card)({
                isLoading: props.firstTimeLoadedIds.includes(card.id),
                cardData: card,
                key: card.id,
                ...props
            }))}
        </div>
    )
}

export default CardList