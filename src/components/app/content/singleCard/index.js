import React, {Fragment} from 'react';
import './index.css';
import Card from '../cardList/card';
import { useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";

function SingleCard({ location }) {
    const history = useHistory();
    try {
        const isChecked = useSelector((state) =>
            state.cards.checkedCardIds.includes(location.cardData.id)
        );
        return (
            <div className="card-wrapper">
                <Card {...location} checked={isChecked} />
            </div>
        );
    } catch (TypeError) {
        history.push('/not-found')
        return <Fragment/>
    }
}

export default SingleCard;