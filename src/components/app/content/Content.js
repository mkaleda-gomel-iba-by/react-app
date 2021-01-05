import React, {useState} from 'react';
import './Content.css'
import Cards from "./cards/Cards";

function Content() {
    const [readOnly, setReadOnly] = useState(false)

    return (
        <div className="content">
            <div className="container">
                <div className="cards-panel">
                    <label><input type="checkbox" onInput={() => setReadOnly(!readOnly)}/>Readonly</label>
                </div>
                <Cards readOnly={readOnly} cardsCount={8}/>
            </div>
        </div>
    )
}

export default Content