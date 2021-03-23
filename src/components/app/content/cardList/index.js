import React, { useContext } from 'react';
import './index.css';
import Card from './card';
import { CardsContext } from '../../CardsContext';

function CardList(props) {
    const { cards, checkedCardIds } = useContext(CardsContext);
    return (
        <div className="cards">
            {cards.map((card, index) => (
                <Card
                    cardData={card}
                    readOnly={props.readOnly}
                    checked={checkedCardIds.includes(card.id)}
                    key={index}
                />
            ))}
        </div>
    );
}

export default CardList;