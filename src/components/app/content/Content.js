import React, {useState} from 'react';
import Cards from './cards/Cards';
import './Content.css'
import styled from 'styled-components'

function Content() {
    const [readOnly, setReadOnly] = useState(false)

    const Input = styled.input `
      background: aquamarine;
      border-radius: 50%;
      transform: scale(1.9);
    `
    return (
        <div className="content">
            <div className="container">
                <div className="cards-panel">
                    <label><Input type="radio" onInput={() => setReadOnly(!readOnly)}/>Readonly</label>
                </div>
                <Cards readOnly={readOnly} cardsCount={8}/>
            </div>
        </div>
    )
}

export default Content