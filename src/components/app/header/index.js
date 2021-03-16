import React from 'react';
import './index.css'
import {useCards} from "../CardsContext";

function Header() {
    const {cards} = useCards();
    return (
        <div className="header header-layout">
            <div className="container">
                <div className="header-data">
                    <h1 className="header-title">Header</h1>
                    <h6>Cards count <span className="badge badge-secondary">{cards.length}</span></h6>
                </div>
            </div>
        </div>
    )
}

export default Header