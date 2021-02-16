import React, {Fragment} from 'react';
import "./index.css"
import {useCardTempState} from "../../../context";

const classNames = require('classnames');

function CardHeader(props) {
    const {fillHeader} = useCardTempState()
    const editPanel = <Fragment>
        <i className="fa fa-folder" onClick={() => props.saveCardDataChanges()}/>
        <i className="fa fa-close" onClick={() => props.restoreCardDataChanges()}/>
    </Fragment>

    const viewPanel = <Fragment>
        {props.readOnly || <i className="fa fa-pencil" aria-hidden="true" onClick={() => props.editMode()}/>}
        <input type="checkbox" checked={props.cardOptions.checked} onChange={() => props.selectCard()}/>
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