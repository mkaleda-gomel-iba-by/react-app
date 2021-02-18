import React, {Fragment, useContext} from 'react';
import Context from "../../../context";
import "./index.css"

const classNames = require('classnames');

function CardHeader(props) {
    const {fillHeader, selectCard, editMode, saveCardDataChanges, restoreCardDataChanges} = useContext(Context)
    const editPanel = <Fragment>
        <i className="fa fa-folder" onClick={() => saveCardDataChanges()}/>
        <i className="fa fa-close" onClick={() => restoreCardDataChanges()}/>
    </Fragment>

    const viewPanel = <Fragment>
        {props.readOnly || <i className="fa fa-pencil" aria-hidden="true" onClick={() => editMode()}/>}
        <input type="checkbox" checked={props.cardOptions.checked} onChange={() => selectCard()}/>
    </Fragment>

    let panel = props.cardOptions.editable ? editPanel : viewPanel;


    return (
        <div className={classNames('card-header', {'card-header-active': props.cardOptions.checked})}>
            <input className="card-header-title card-header-title-layout" type="text" value={props.header}
                   disabled={!props.cardOptions.editable}
                   onInput={(event) => fillHeader(event)}/>
            <div className="panel panel-layout">
                {panel}
            </div>
        </div>
    )
}

export default CardHeader