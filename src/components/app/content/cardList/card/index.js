import React, { useCallback, useEffect, useState } from 'react';
import './index.css';
import CardHeader from './cardHeader';
import CardBody from './cardBody';
import WithLoadingDelay from '../WithLoadingDelay';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCard } from '../../../../../redux/actions';

function Card(props) {
    const dispatch = useDispatch();
    const cardData = props.cardData;

    const [tempState, setTempState] = useState({ ...cardData });
    const [editable, setEditable] = useState(false);

    const cancelEditing = () => setEditable(false);

    const saveCardDataChanges = () => {
        cancelEditing();
        dispatch(updateCard(tempState));
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

    const history = useHistory();
    const cardHandler = () => {
        const path = `/card/:${cardData.id}`;
        editable || props.isSingleCard ||
            history.push({
                pathname: path,
                cardData,
                readOnly: props.readOnly,
            });
    };

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

export default WithLoadingDelay(Card);
