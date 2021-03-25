import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Content from './content';
import CardsProvider from './CardsContext';
import LoginPage from './login';
import NotFound from './not_found';

function App() {
    return (
        <CardsProvider>
                <BrowserRouter>
                    <Header />

                    <Switch>
                        <Route path={'/'} exact component={Content} />
                        <Route path={'/login'} exact component={LoginPage} />
                        <Route component={NotFound} />
                    </Switch>
                </BrowserRouter>
        </CardsProvider>
    );
}

export default App;
