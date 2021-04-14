import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Content from './content';
import LoginPage from './login';
import NotFound from './not_found';
import {useDispatch, useSelector} from 'react-redux';
import SingleCard from "./content/singleCard";
import {fetchCards} from "../../redux/actions";
import Settings from "./settings";

function App() {
    const dispatch = useDispatch();
    const isAdmin = useSelector(state => state.user.isAdmin)

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
                {isAdmin && <Route path="/settings" component={Settings} />}
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
