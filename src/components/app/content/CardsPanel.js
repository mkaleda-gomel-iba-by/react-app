import React  from 'react';
import { removeCards } from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

function CardsPanel(props) {
    const dispatch = useDispatch();
    const checkedCardIds = useSelector(state => state.cards.checkedCardIds);
    return (
        <div className="cards-panel cards-panel-layout">
            <div className="buttons-wrapper">
                &nbsp;
                <button
                    className="cards-manage-button"
                    onClick={() => props.toggleAddCardModal()}
                >
                    Add card
                </button>
                &nbsp;
                {checkedCardIds.length === 0 || (
                    <button
                        className="cards-manage-button"
                        onClick={() => dispatch(removeCards(props.checkedCardIds))}
                    >
                        Delete cards
                    </button>
                )}
            </div>
        </div>
    );
}

export default CardsPanel;