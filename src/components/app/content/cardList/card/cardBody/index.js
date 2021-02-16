import React from 'react';
import "./index.css"
import {useCardTempState} from "../../../context";

function CardBody(props) {
    const{fillBody} = useCardTempState()
    return (
        <div className="card-body">
                <textarea value={props.body} disabled={!props.editable}
                          onChange={(event) => fillBody(event)}/>
        </div>
    )
}

export default CardBody