import React, {useCallback, useEffect, useState} from 'react';
import Context from "./context";
import './index.css'
import CardHeader from "./cardHeader";
import CardBody from "./cardBody";

function Card(props) {
    const cardData = props.cardData

    const [cardOptions, setCardOptions] = useState({checked: false, editable: false})
    const [tempState, setTempState] = useState({header: props.cardData.header, body: props.cardData.body})

    const cancelEditing = () => setCardOptions({checked: false, editable: false})

    const saveCardDataChanges = () => {
        cancelEditing()
        props.saveCardData(cardData.id, tempState)
    }
    const restoreCardDataChanges = useCallback(() => {
        cancelEditing()
        setTempState({header: cardData.header, body: cardData.body})
    }, [cardData.header, cardData.body])

    useEffect(() => {
        restoreCardDataChanges()
    }, [props.readOnly, restoreCardDataChanges])

    const fillHeader = (event) => setTempState({...tempState, header: event.target.value})
    const fillBody = (event) => setTempState({...tempState, body: event.target.value})

    const selectCard = () => setCardOptions({editable: false, checked: !cardOptions.checked})
    const editMode = () => setCardOptions({checked: false, editable: true})

    return (
        <Context.Provider
            value={{fillHeader, fillBody, selectCard, editMode, saveCardDataChanges, restoreCardDataChanges}}>
            <div className="card card-layout">
                <CardHeader cardOptions={cardOptions} header={tempState.header}/>
                <CardBody editable={cardOptions.editable} body={tempState.body}/>
            </div>
        </Context.Provider>
    )
}

export default Card
