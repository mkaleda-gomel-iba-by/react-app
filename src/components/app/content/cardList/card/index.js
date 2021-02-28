import React, {useCallback, useEffect, useState} from 'react';
import './index.css'
import CardHeader from "./cardHeader";
import CardBody from "./cardBody";
import WithLoadingDelay from "../WithLoadingDelay";

function Card(props) {
    const cardData = props.cardData;
    const cardId = cardData.id;

    const [tempState, setTempState] = useState({...cardData});
    const [editable, setEditable] = useState(false);

    const cancelEditing = () => setEditable(false);

    const saveCardDataChanges = () => {
        cancelEditing();
        props.saveCardData(cardId, tempState);
    };
    const restoreCardDataChanges = useCallback(() => {
        cancelEditing();
        setTempState({...cardData});
    }, [cardData]);

    useEffect(() => {
        restoreCardDataChanges();
    }, [props.readOnly, restoreCardDataChanges]);

    const fillData = (data) => setTempState({...tempState, ...data})

    const selectCard = () => {
        setEditable(false);
        props.checkedControl.selectCard(cardId);
    };
    const editMode = () => {
        setEditable(true);
        props.checkedControl.removeCheckedCard(cardId);
    };

    return (
        <div className="card card-layout">
            <CardHeader cardOptions={{checked: props.checked, editable: editable}}
                        header={tempState.header}
                        selectCard={selectCard}
                        editMode={editMode}
                        fillData={fillData}
                        saveCardDataChanges={saveCardDataChanges}
                        restoreCardDataChanges={restoreCardDataChanges}
                        readOnly={props.readOnly}/>
            <CardBody editable={editable} body={tempState.body} fillData={fillData}
                      saveCardDataChanges={saveCardDataChanges}
                      restoreCardDataChanges={restoreCardDataChanges}
                      readOnly={props.readOnly}/>
        </div>
    )
}

export default WithLoadingDelay(Card)
