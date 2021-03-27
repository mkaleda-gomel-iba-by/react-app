import React  from 'react';
import Checkbox from './Checkbox';
import { removeCards } from '../../../redux/actions';
import { connect } from 'react-redux';

function CardsPanel(props) {
    return (
        <div className="cards-panel cards-panel-layout">
            <Checkbox
                setChecked={props.setReadOnly}
                checked={props.readOnly}
                label={'Readonly'}
            />
            <div className="buttons-wrapper">
                {props.checkedCardIds.length === 0 || (
                    <button
                        className="cards-manage-button"
                        onClick={() => props.removeCards(props.checkedCardIds)}
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

const mapStateToProps = (state) => {
    return {
        checkedCardIds: state.cards.checkedCardIds,
    };
};

export default connect(mapStateToProps, { removeCards })(CardsPanel);