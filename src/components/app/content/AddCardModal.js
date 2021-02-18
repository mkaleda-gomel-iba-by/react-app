import React, {useState} from "react";

export default function AddCardModal(props) {
    const [newCardData, setNewCardData] = useState({header: '', body: ''})
    if (!props.addCardDataVisible) return null
    return (
        <div>
            <h3>Fill card data</h3>
            <input type="text" placeholder="Header"
                   onInput={(event) => setNewCardData({...newCardData, header: event.target.value})}/>
            <input type="text" placeholder="Body"
                   onInput={(event) => setNewCardData({...newCardData, body: event.target.value})}/>
            <button className="cards-manage-button" onClick={() => props.addCard(newCardData)}>Add card</button>
        </div>
    )
}