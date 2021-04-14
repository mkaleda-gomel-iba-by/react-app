import React from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetState } from '../../../redux/user';

function Header() {
    const dispatch = useDispatch();
    const cardsCount = useSelector((state) => state.cards.cards.length);
    const username = useSelector((state) => state.user.username);
    const isAdmin = useSelector((state) => state.user.isAdmin);

    const loginLogout = username ? (
        <li className="nav-item" onClick={() => dispatch(resetState())}>
            <NavLink className="nav-link" to={'/login'}>
                Logout
            </NavLink>
        </li>
    ) : (
        <li className="nav-item">
            <NavLink className="nav-link" to={'/login'}>
                Sign in
            </NavLink>
        </li>
    );
    return (
        <nav className="navbar fixed-top navbar-expand-sm justify-content-between">
            <div className="navbar">
                <NavLink className="navbar-brand" to={'/'}>
                    App name
                </NavLink>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/'}>
                            Home
                        </NavLink>
                    </li>
                    {!isAdmin || (
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/settings'}>
                                Settings
                            </NavLink>
                        </li>
                    )}
                </ul>
            </div>
            <div className="navbar">
                <span className="navbar-text">
                    <span
                        className="badge badge-pill badge-primary"
                        style={{ float: 'right' }}
                    >
                        {cardsCount}
                    </span>
                    <span>Cards count</span>
                </span>
                &nbsp;
                {!username || (
                    <span className="navbar-text">
                        <span>Приветствую {username.split('@')[0]}</span>
                    </span>
                )}
                <ul className="navbar-nav my-2 my-lg-0">{loginLogout}</ul>
            </div>
        </nav>
    );
}

export default Header;