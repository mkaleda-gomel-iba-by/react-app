import React from 'react';
import Header from './header';
import Content from './content';
import CardsProvider from "./CardsContext";

function App() {
    return (
        <CardsProvider>
            <Header />
            <Content />
        </CardsProvider>
    );
}

export default App;
