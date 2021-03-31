import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './header';
import Content from './content';
import LoginPage from './login';
import NotFound from './not_found';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from 'react-redux';
import {addFetchedCards} from "../../redux/actions";
import SingleCard from "./content/singleCard";

function App() {
    const dispatch = useDispatch()

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

        fetchCards().then((cards) => dispatch(addFetchedCards(cards)));
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
