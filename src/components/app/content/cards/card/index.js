import React, {Fragment, useEffect, useState} from 'react';
import './index.css'

const classNames = require('classnames');

function Card(props) {
    const cardData = props.cardData
    const cardId = cardData.id

    const [backupState, setBackupState] = useState({header: 'Caption', body: 'Text...'})

    useEffect(() => {
        console.log(backupState)
        props.restoreCardData(cardId, backupState);
        }, [props.readonly, backupState, cardId])

    const saveCardDataChanges = () => {
        props.cancelEditing(cardId)
        setBackupState({header: cardData.header, body: cardData.body})
    }

    const editPanel = <Fragment>
        <i className="fa fa-folder" onClick={saveCardDataChanges}/>
        <i className="fa fa-close" onClick={() => props.restoreCardData(cardId, backupState)}/>
    </Fragment>

    const viewPanel = <Fragment>
        {props.readonly || (<i className="fa fa-pencil" aria-hidden="true" onClick={() => props.editCard(cardId)}/>)}
        <input type="checkbox" checked={cardData.checked} onChange={() => props.selectCard(cardId)}/>
    </Fragment>

    let panel = cardData.editable ? editPanel : viewPanel

    return (
        <div className="card card-layout">
            <div className={classNames('card-header', {'card-header-active': cardData.checked})}>
                <input className="card-header-title card-header-title-layout" type="text" value={cardData.header}
                       disabled={!cardData.editable} onInput={(event) => props.fillHeader(cardId, event)}/>
                <div className="panel panel-layout">
                    {panel}
                </div>
            </div>
            <div className="card-body">
                <textarea value={cardData.body} disabled={!cardData.editable} onInput={(event) => props.fillBody(cardId, event)}/>
            </div>
        </div>
    )
}

export default Card