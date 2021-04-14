import React, { useState } from 'react';
import './index.css';
import CardList from './cardList';
import AddCardModal from './AddCardModal';
import CardsPanel from './CardsPanel';
import {useSelector} from "react-redux";

function Content() {
    const [addCardModalVisible, setAddCardModalVisible] = useState(false);
    const toggleAddCardModal = () =>
        setAddCardModalVisible((prevState) => !prevState);
    const readOnly = useSelector(state => state.cards.readOnly)

    return (
        <div className="container-fluid">
            <div className="content content-layout">
                {readOnly || <CardsPanel
                    toggleAddCardModal={toggleAddCardModal}
                />}
                <AddCardModal
                    addCardModalVisible={addCardModalVisible}
                    toggleAddCardModal={toggleAddCardModal}
                />
                <CardList />
            </div>
        </div>
    );
}

export default Content