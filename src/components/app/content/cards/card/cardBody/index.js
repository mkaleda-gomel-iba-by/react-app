import React, {useContext} from 'react';
import Context from "../context";
import "./index.css"

function CardBody(props) {
    const {fillBody} = useContext(Context)

    return (
        <div className="card-body">
                <textarea value={props.body} disabled={!props.editable}
                          onChange={(event) => fillBody(event)}/>
        </div>
    )
}

export default CardBody