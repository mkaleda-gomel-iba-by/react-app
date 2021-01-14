import React, {Fragment, useState} from 'react';
import './index.css'

const classNames = require('classnames');

function Card() {
    const initHeader = 'Caption';
    const initBody = 'Text...';

    const [cardOptions, setCardOptions] = useState({checked: false, editable: false})
    const [cardData, setCardData] = useState({header: initHeader, body: initBody})
    const [backupState, setBackupState] = useState({header: initBody, body: initBody})

    let cancelEditing = () => setCardOptions({editable: false, checked: cardOptions.checked})
    let saveCardDataChanges = () => {
        cancelEditing()
        setBackupState({header: cardData.header, body: cardData.body})
    }
    let restoreCardData = () => {
        cancelEditing()
        setCardData({header: backupState.header, body: backupState.body})
    }
    let editCard = () => setCardOptions({editable: true, checked: false})
    let selectCard = () => setCardOptions({checked: !cardOptions.checked, editable: cardOptions.editable})
    let fillHeader = (event) => setCardData({header: event.target.value, body: cardData.body})
    let fillBody = (event) => setCardData({header: cardData.header, body: event.target.value})

    const editPanel = <Fragment>
        <i className="fa fa-folder" onClick={saveCardDataChanges}/>
        <i className="fa fa-close" onClick={restoreCardData}/>
    </Fragment>

    const viewPanel = <Fragment>
        <i className="fa fa-pencil" aria-hidden="true" onClick={editCard}/>
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