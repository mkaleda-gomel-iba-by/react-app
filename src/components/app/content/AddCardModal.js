import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {createCard} from "../../../redux/actions";

function AddCardModal(props) {
    const dispatch = useDispatch();
    const [newCardData, setNewCardData] = useState({ header: '', body: '' });
    const saveCard = () => {
        dispatch(createCard(newCardData));
        setNewCardData({ header: '', body: '' });
        props.toggleAddCardModal();
    };
    if (!props.addCardModalVisible) return null;
    return (
        <div className="add-card-modal add-card-modal-layout">
            <h5>Fill card data</h5>
            <input
                type="text"
                placeholder="Header"
                onInput={(event) =>
                    setNewCardData({ ...newCardData, header: event.target.value })
                }
            />
            &nbsp;
            <input
                type="text"
                placeholder="Body"
                onInput={(event) =>
                    setNewCardData({ ...newCardData, body: event.target.value })
                }
            />
            &nbsp;
            <button onClick={() => saveCard()}>Save card</button>
        </div>
    );
}

export default AddCardModal;