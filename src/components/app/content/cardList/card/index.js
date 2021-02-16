import React, {useCallback, useEffect, useState} from 'react';
import {CardTempStateProvider} from "../../context";
import './index.css'
import CardHeader from "./cardHeader";
import CardBody from "./cardBody";

function Card(props) {
    const cardData = props.cardData;
    const cardId = cardData.id;

    const [editable, setEditable] = useState(false);

    // const {cardTempState, restoreCardTempState} = useCardTempState()

    const cancelEditing = () => setEditable(false);

    const saveCardDataChanges = () => {
        cancelEditing();
        // props.saveCardData(cardId, cardTempState);
    };
    const restoreCardDataChanges = useCallback(() => {
        cancelEditing();
        // restoreCardTempState({...cardData});
    }, [cardData]);

    useEffect(() => {
        restoreCardDataChanges();
    }, [props.readOnly, restoreCardDataChanges]);

    const selectCard = () => {
        setEditable(false);
        props.checkedControl.selectCard(cardId);
    };
    const editMode = () => {
        setEditable(true);
        props.checkedControl.removeCheckedCard(cardId);
    };

    return (
        <CardTempStateProvider initialState={{...cardData}}>
            <div className="card card-layout">
                <CardHeader cardOptions={{checked: props.checked, editable: editable}} readOnly={props.readOnly}
                            selectCard={selectCard} editMode={editMode} restoreCardDataChanges={restoreCardDataChanges}
                            saveCardDataChanges={saveCardDataChanges}/>
                <CardBody editable={editable}/>
            </div>
        </CardTempStateProvider>
    )
}

export default Card
