import React, { useContext } from 'react';
import Checkbox from './Checkbox';
import { CardsContext } from '../CardsContext';

export default function CardsPanel(props) {
    const { checkedCardIds, deleteCards } = useContext(CardsContext);
    return (
        <div className="cards-panel cards-panel-layout">
            <Checkbox
                setChecked={props.setReadOnly}
                checked={props.readOnly}
                label={'Readonly'}
            />
            <div className="buttons-wrapper">
                {checkedCardIds.length === 0 || (
                    <button
                        className="cards-manage-button"
                        onClick={() => deleteCards()}
                    >
                        Delete cards
                    </button>
                )}
                &nbsp;
                <button
                    className="cards-manage-button"
                    onClick={() => props.toggleAddCardModal()}
                >
                    Add card
                </button>
            </div>
        </div>
    );
}