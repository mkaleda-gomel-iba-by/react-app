import React, {useContext} from 'react';
import './index.css'
import {CardsContext} from "../CardsContext";

function Header() {
    const {getCardsCount} = useContext(CardsContext);
    return (
        <div className="header header-layout">
            <div className="container">
                <div className="header-data">
                    <h1 className="header-title">Header</h1>
                    <h6>Cards count <span className="badge badge-secondary">{getCardsCount()}</span></h6>
                </div>
            </div>
        </div>
    )
}

export default Header