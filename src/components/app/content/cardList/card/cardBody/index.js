import React from 'react';
import "./index.css"

function CardBody(props) {
    return (
        <div className="card-body">
                <textarea value={props.body} disabled={!props.editable}
                          onChange={(event) => props.fillBody(event)}/>
        </div>
    )
}

export default CardBody