import React  from 'react';
import './index.css';
import Card from './card';
import { connect } from 'react-redux';

function CardList(props) {
    return (
        <div className="cards">
            {props.cards.map((card, index) => (
                <Card
                    cardData={card}
                    readOnly={props.readonly}
                    checked={props.checkedCardIds.includes(card.id)}
                    key={index}
                />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cards: state.cards.cards,
        checkedCardIds: state.cards.checkedCardIds,
    };
};

export default connect(mapStateToProps)(CardList);