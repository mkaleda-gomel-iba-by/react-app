import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Content from './content';
import LoginPage from './login';
import NotFound from './not_found';
import Card from './content/card';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import {addFetchedCards} from "../../redux/actions";

function App({ addFetchedCards }) {
    useEffect(() => {
        async function fetchCards() {
            const response = await axios(
                'https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json'
            );
            return response.data.slice(0, 15).map(({ Name, About }) => {
                return {
                    id: uuidv4(),
                    header: Name,
                    body: About,
                };
            });
        }

        fetchCards().then((cards) => addFetchedCards(cards));
    }, [addFetchedCards]);

    return (
        <BrowserRouter>
            <Header />

            <Switch>
                <Route path={'/'} exact component={Content} />
                <Route path={'/login'} exact component={LoginPage} />
                <Route path="/card/:id" component={Card} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default connect(null, { addFetchedCards })(App);
