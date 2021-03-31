import React  from 'react';
import Checkbox from './Checkbox';
import { removeCards } from '../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

function CardsPanel(props) {
    const dispatch = useDispatch();
    const checkedCardIds = useSelector(state => state.cards.checkedCardIds);
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
                        onClick={() => dispatch(removeCards(props.checkedCardIds))}
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

export default CardsPanel;