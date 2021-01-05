import React from 'react';
import "./Cards.css"
import Card from "./card/Card";

function Cards(props) {
    return (
        <div className="cards">
            <Card readonly={props.readOnly}/>
            <Card readonly={props.readOnly}/>
            <Card readonly={props.readOnly}/>
            <Card readonly={props.readOnly}/>
            <Card readonly={props.readOnly}/>
        </div>
    )
}

export default Cards