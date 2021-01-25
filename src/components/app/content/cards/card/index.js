import React, {Fragment, useEffect, useState} from 'react';
import './index.css'

const classNames = require('classnames');

function Card({readonly}) {
    const initHeader = 'Caption';
    const initBody = 'Text...';

    const [cardOptions, setCardOptions] = useState({checked: false, editable: false})
    const [cardData, setCardData] = useState({header: initHeader, body: initBody})
    const [backupState, setBackupState] = useState({header: initBody, body: initBody})

    useEffect(() => {
        setCardOptions({checked: cardOptions.checked, editable: false})
        setCardData({header: backupState.header, body: backupState.body})
    }, [readonly])

    const cancelEditing = () => setCardOptions({editable: false, checked: cardOptions.checked})
    const saveCardDataChanges = () => {
        cancelEditing()
        setBackupState({header: cardData.header, body: cardData.body})
    }
    const restoreCardData = () => {
        cancelEditing()
        setCardData({header: backupState.header, body: backupState.body})
    }
    const editCard = () => setCardOptions({editable: true, checked: false})
    const selectCard = () => setCardOptions({checked: !cardOptions.checked, editable: cardOptions.editable})
    const fillHeader = (event) => setCardData({header: event.target.value, body: cardData.body})
    const fillBody = (event) => setCardData({header: cardData.header, body: event.target.value})

    const editPanel = <Fragment>
        <i className="fa fa-folder" onClick={saveCardDataChanges}/>
        <i className="fa fa-close" onClick={restoreCardData}/>
    </Fragment>

    const viewPanel = <Fragment>
        {readonly || (<i className="fa fa-pencil" aria-hidden="true" onClick={editCard}/>)}
        <input type="checkbox" checked={cardOptions.checked} onChange={selectCard}/>
    </Fragment>

    let panel = cardOptions.editable ? editPanel : viewPanel

    return (
        <div className="card card-layout">
            <div  className={classNames('card-header', {'card-header-active': cardOptions.checked})}>
                <input className="card-header-title card-header-title-layout" type="text" value={cardData.header}
                       disabled={!cardOptions.editable} onInput={fillHeader}/>
                <div className="panel panel-layout">
                    {panel}
                </div>
            </div>
            <div className="card-body">
                <textarea value={cardData.body} disabled={!cardOptions.editable} onInput={fillBody}/>
            </div>
        </div>
    )
}

export default Card