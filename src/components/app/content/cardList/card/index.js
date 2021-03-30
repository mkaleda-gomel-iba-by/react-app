import React, { useCallback, useEffect, useState } from 'react';
import './index.css';
import CardHeader from './cardHeader';
import CardBody from './cardBody';
import WithLoadingDelay from '../WithLoadingDelay';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCard } from '../../../../../redux/actions';
import { useHistory } from 'react-router-dom';

function Card(props) {
    const cardData = props.cardData;

    const [tempState, setTempState] = useState({ ...cardData });
    const [editable, setEditable] = useState(false);

    const cancelEditing = () => setEditable(false);

    const saveCardDataChanges = () => {
        cancelEditing();
        props.updateCard(tempState);
    };
    const restoreCardDataChanges = useCallback(() => {
        cancelEditing();
        setTempState({ ...cardData });
    }, [cardData]);

    useEffect(() => {
        restoreCardDataChanges();
    }, [props.readOnly, restoreCardDataChanges]);

    const fillData = (data) => setTempState({ ...tempState, ...data });

    const editMode = () => setEditable(true);

    let history = useHistory();
    const cardHandler = () =>
        editable || history.push({ pathname: `/card/:${cardData.id}`, cardData });

    return (
        <div className="card card-layout" onDoubleClick={cardHandler}>
            <CardHeader
                cardOptions={{ checked: props.checked, editable: editable }}
                card={tempState}
                editMode={editMode}
                fillData={fillData}
                saveCardDataChanges={saveCardDataChanges}
                restoreCardDataChanges={restoreCardDataChanges}
                readOnly={props.readOnly}
            />
            <CardBody
                editable={editable}
                body={tempState.body}
                fillData={fillData}
                saveCardDataChanges={saveCardDataChanges}
                restoreCardDataChanges={restoreCardDataChanges}
                readOnly={props.readOnly}
            />
        </div>
    );
}

Card.propTypes = {
    cardData: PropTypes.object.isRequired,
    readOnly: PropTypes.bool.isRequired,
    checked: PropTypes.bool.isRequired,
};

const mapDispatchToProps = { updateCard };

export default connect(null, mapDispatchToProps)(WithLoadingDelay(Card));
