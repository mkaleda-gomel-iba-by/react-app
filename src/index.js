import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import {mainReducer} from './redux/mainReducer';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {loggerMiddleware} from "./redux/middleware";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({middleware: [thunk, loggerMiddleware], reducer: mainReducer})

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
