import React, {useState} from 'react';
import './index.css';
import Cards from "./cards";
import styled from "styled-components";

function Content() {
    const [readOnly, setReadOnly] = useState(false)
    const [cards, setCards] = useState([
        {id: 1, header: 'Caption', body: 'Text...'},
        {id: 2, header: 'Caption', body: 'Text...'},
        {id: 3, header: 'Caption', body: 'Text...'},
        {id: 4, header: 'Caption', body: 'Text...'},
        {id: 5, header: 'Caption', body: 'Text...'},
        {id: 6, header: 'Caption', body: 'Text...'},
        {id: 7, header: 'Caption', body: 'Text...'},
        {id: 8, header: 'Caption', body: 'Text...'},
    ])

    function saveCardData(cardId, tempState) {
        let card = cards.find(card => card.id === cardId)
        card.header = tempState.header
        card.body = tempState.body
        setCards(cards)
    }

    const Checkmark = styled.span`
      position: absolute;
      top: .5rem;
      left: .5rem;
      height: 20px;
      width: 20px;
      background-color: #eee;
      border: 2px solid rebeccapurple;
      border-radius: 5px;

      &:after {
        content: "";
        position: absolute;
        display: none;
        left: 5px;
        top: -1px;
        width: 7px;
        height: 15px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    `

    const Checkbox = styled.input.attrs(
        {type: 'checkbox', onClick: () => setReadOnly(!readOnly), checked: readOnly})`
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;

      &:checked ~ ${Checkmark} {
        background-color: rebeccapurple;
      }

      &:checked ~ ${Checkmark}:after {
        background-color: rebeccapurple;
      }

      .cards-panel &:checked ~ ${Checkmark}:after {
        display: block;
      }
    `

    return (
        <div className="content content-layout">
            <div className="container">
                <div className="cards-panel cards-panel-layout">
                    <label><Checkbox/>Readonly<Checkmark/></label>
                </div>
                <Cards readOnly={readOnly} cards={cards} saveCardData={saveCardData}/>
            </div>
        </div>
    )
}

export default Content