import React, {useCallback, useEffect, useState} from 'react';
import Context from "../../context";
import './index.css'
import CardHeader from "./cardHeader";
import CardBody from "./cardBody";

function Card(props) {
    const cardData = props.cardData;
    const cardId = cardData.id;

    const [tempState, setTempState] = useState({header: props.cardData.header, body: props.cardData.body});
    const [editable, setEditable] = useState(false);

    const cancelEditing = () => setEditable(false);

    const saveCardDataChanges = () => {
        cancelEditing();
        props.saveCardData(cardId, tempState);
    };
    const restoreCardDataChanges = useCallback(() => {
        cancelEditing();
        setTempState({header: cardData.header, body: cardData.body});
    }, [cardData.header, cardData.body]);

    useEffect(() => {
        restoreCardDataChanges();
    }, [props.readOnly, restoreCardDataChanges]);

    const fillHeader = (event) => setTempState({...tempState, header: event.target.value});
    const fillBody = (event) => setTempState({...tempState, body: event.target.value});

    const selectCard = () => {
        setEditable(false);
        props.checkedControl.selectCard(cardId);
    };
    const editMode = () => {
        setEditable(true);
        props.checkedControl.removeCheckedCard(cardId);
    };

    return (
        <Context.Provider
            value={{fillHeader, fillBody, selectCard, editMode, saveCardDataChanges, restoreCardDataChanges}}>
            <div className="card card-layout">
                <CardHeader cardOptions={{checked: props.checked, editable: editable}} header={tempState.header}
                            readOnly={props.readOnly}/>
                <CardBody editable={editable} body={tempState.body}/>
            </div>
        </Context.Provider>
    )
}

export default Card
