import React, { useState } from 'react';
import './index.css';
import CardList from './cardList';
import AddCardModal from './AddCardModal';
import CardsPanel from './CardsPanel';

function Content() {
    const [readOnly, setReadOnly] = useState(false);

    const [addCardModalVisible, setAddCardModalVisible] = useState(false);
    const toggleAddCardModal = () =>
        setAddCardModalVisible((prevState) => !prevState);

    return (
        <div className="container-fluid">
            <div className="content content-layout">
                <CardsPanel
                    toggleAddCardModal={toggleAddCardModal}
                    setReadOnly={setReadOnly}
                    readOnly={readOnly}
                />
                <AddCardModal
                    addCardModalVisible={addCardModalVisible}
                    toggleAddCardModal={toggleAddCardModal}
                />
                <CardList readOnly={readOnly} />
            </div>
        </div>
    );
}

export default Content