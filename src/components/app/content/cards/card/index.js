import React, {Fragment, useCallback, useEffect, useState} from 'react';
import './index.css'

const classNames = require('classnames');

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

    const editPanel = <Fragment>
        <i className="fa fa-folder" onClick={() => saveCardDataChanges()}/>
        <i className="fa fa-close" onClick={() => restoreCardDataChanges()}/>
    </Fragment>

    const viewPanel = <Fragment>
        {props.readOnly || <i className="fa fa-pencil" aria-hidden="true" onClick={() => editMode()}/>}
        <input type="checkbox" checked={cardOptions.checked} onChange={() => selectCard()}/>
    </Fragment>

    let panel = cardOptions.editable ? editPanel : viewPanel

    return (
        <div className="card card-layout">
            <div className={classNames('card-header', {'card-header-active': cardOptions.checked})}>
                <input className="card-header-title card-header-title-layout" type="text" value={tempState.header}
                       disabled={!cardOptions.editable}
                       onInput={(event) => fillHeader(event)}/>
                <div className="panel panel-layout">
                    {panel}
                </div>
            </div>
            <div className="card-body">
                <textarea value={tempState.body} disabled={!cardOptions.editable}
                          onChange={(event) => fillBody(event)}/>
            </div>
        </div>
    )
}

export default Card