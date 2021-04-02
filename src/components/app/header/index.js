import React  from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import {useSelector} from "react-redux";

function Header() {
    const cardsCount = useSelector(state => state.cards.cards.length)
    return (
        <nav className="navbar fixed-top navbar-expand-sm justify-content-between">

            <div className="navbar" >
                <NavLink className="navbar-brand" to={'/'}>
                    App name
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/'}>
                            Home
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar" >
                <span className="navbar-text">
                    <span
                        className="badge badge-pill badge-primary"
                        style={{ float: 'right' }}
                    >
                        {cardsCount}
                    </span>
                    <span>Cards count</span>
                </span>

                <ul className="navbar-nav my-2 my-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/login'}>
                            Sign in
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;