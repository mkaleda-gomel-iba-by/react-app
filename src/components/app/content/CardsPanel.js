import React from "react";
import Checkbox from "./Checkbox";

export default function CardsPanel(props) {
    return (
        <div className="cards-panel cards-panel-layout">
            <Checkbox setChecked={props.setReadOnly} checked={props.readOnly} label={'Readonly'}/>
            <div className="buttons-wrapper">
                {props.isSelected ||
                <button className="cards-manage-button" onClick={() => props.deleteCards()}>Delete cards</button>}
                <button className="cards-manage-button" onClick={() => props.toggleAddCardModal()}>Add card</button>
            </div>
        </div>
    )
}