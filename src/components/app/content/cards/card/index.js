import React, {Fragment, useEffect, useState} from 'react';
import './index.css'

const classNames = require('classnames');

function Card(props) {
    const cardData = props.cardData
    const cardId = cardData.id

    const [backupState, setBackupState] = useState({header: 'Caption', body: 'Text...'})

    useEffect(() => {
        props.editCard(cardId, {...cardData, ...backupState, editable: false});
        }, [props.readonly])

    const saveCardDataChanges = () => {
        props.editCard(cardId, {...cardData, editable: false})
        setBackupState({header: cardData.header, body: cardData.body})
    }

    const editPanel = <Fragment>
        <i className="fa fa-folder" onClick={saveCardDataChanges}/>
        <i className="fa fa-close"
           onClick={() => props.editCard(cardId, {...cardData, ...backupState, editable: false})}/>
    </Fragment>

    const viewPanel = <Fragment>
        {props.readOnly || <i className="fa fa-pencil" aria-hidden="true"
           onClick={() => props.editCard(cardId, {...cardData, checked: false, editable: true})}/>}
        <input type="checkbox" checked={cardData.checked}
               onChange={() => props.editCard(cardId, {...cardData, checked: !cardData.checked})}/>
    </Fragment>

    let panel = cardData.editable ? editPanel : viewPanel

    return (
        <div className="card card-layout">
            <div className={classNames('card-header', {'card-header-active': cardData.checked})}>
                <input className="card-header-title card-header-title-layout" type="text" value={cardData.header}
                       disabled={!cardData.editable}
                       onInput={(event) => props.editCard(cardId, {...cardData, header: event.target.value})}/>
                <div className="panel panel-layout">
                    {panel}
                </div>
            </div>
            <div className="card-body">
                <textarea value={cardData.body} disabled={!cardData.editable}
                          onInput={(event) => props.editCard(cardId, {...cardData, body: event.target.value})}/>
            </div>
        </div>
    )
}

export default Card