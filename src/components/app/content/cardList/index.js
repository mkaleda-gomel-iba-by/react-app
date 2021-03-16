import React from 'react';
import "./index.css"
import Card from "./card";
import {useCards} from "../../CardsContext";

function CardList(props) {
    const {cards, checkedCardIds} = useCards()
    return (
        <div className="cards">
            {cards.map((card, index) => <Card cardData={card} readOnly={props.readOnly}
                                              checked={checkedCardIds.includes(card.id)} key={index}/>)}
        </div>
    )
}

export default CardList