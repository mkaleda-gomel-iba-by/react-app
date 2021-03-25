import React from "react";

export default function Input(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.id} className="text-info">
                {props.labelText}
            </label>
            <br />
            <input
                onChange={(event) => props.validationFunc(event.target.value)}
                type="text"
                id={props.id}
                className="form-control"
            />
        </div>
    )
}
