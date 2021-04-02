import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, createStore} from 'redux';
import {mainReducer} from './redux/mainReducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const logger = () => next => action => {
    console.group(action.type);
    console.info('Params', action.payload);
    console.groupEnd();
    return next(action);
}

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

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
