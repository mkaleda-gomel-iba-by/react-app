import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Content from './content';
import LoginPage from './login';
import NotFound from './not_found';
import { useDispatch } from 'react-redux';
import { fetchCards } from '../../redux/actions';
import SingleCard from './content/singleCard';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCards());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path={'/'} exact component={Content} />
                <Route path={'/login'} exact component={LoginPage} />
                <Route path="/card/:id" component={SingleCard} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
