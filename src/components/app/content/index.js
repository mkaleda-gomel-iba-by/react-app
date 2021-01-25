import React, {useState} from 'react';
import './index.css';
import Cards from "./cards";

function Content() {
    const [readOnly, setReadOnly] = useState(false)
    const cards = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]

    return (
        <div className="content content-layout">
            <div className="container">
                <div className="cards-panel-layout">
                    <label><input type="checkbox" onInput={() => setReadOnly(!readOnly)}/>Readonly</label>
                </div>
                <Cards readOnly={readOnly} cards={cards}/>
            </div>
        </div>
    )
}

export default Content