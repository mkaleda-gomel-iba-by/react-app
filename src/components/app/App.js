import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Content from './content';
import LoginPage from './login';
import NotFound from './not_found';

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path={'/'} exact component={Content} />
                <Route path={'/login'} exact component={LoginPage} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
