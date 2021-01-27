import React, {Fragment, useEffect, useState} from 'react';
import './index.css'

const classNames = require('classnames');

function Card(props) {
    const [cardOptions, setCardOptions] = useState({checked: false, editable: false})
    const [cardData, setCardData] = useState({header: props.cardData.header, body: props.cardData.body})
    const [backupState, setBackupState] = useState({...cardData})

    const cancelEditing = () => setCardOptions({...cardOptions, editable: false})
    const restoreCardData = () => {
        cancelEditing()
        setCardData({...backupState})
    }

    useEffect(() => {
        restoreCardData()
    }, [props.readonly])

    const saveCardDataChanges = () => {
        cancelEditing()
        setBackupState({...cardData})
    }

    const editCard = () => setCardOptions({editable: true, checked: false})
    const selectCard = () => setCardOptions({...cardOptions, checked: !cardOptions.checked})
    const fillHeader = (event) => setCardData({...cardData, header: event.target.value})
    const fillBody = (event) => setCardData({...cardData, body: event.target.value})

    const editPanel = <Fragment>
        <i className="fa fa-folder" onClick={saveCardDataChanges}/>
        <i className="fa fa-close" onClick={restoreCardData}/>
    </Fragment>

    const viewPanel = <Fragment>
        {props.readonly || (<i className="fa fa-pencil" aria-hidden="true" onClick={editCard}/>)}
        <input type="checkbox" checked={cardOptions.checked} onChange={selectCard}/>
    </Fragment>

    let panel = cardOptions.editable ? editPanel : viewPanel

    return (
        <div className="card card-layout">
            <div className={classNames('card-header', {'card-header-active': cardOptions.checked})}>
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