import React, {useState} from 'react';
import './Card.css'

function Card() {
    const [isChecked, setChecked] = useState(false)

    return (
        <div className="card">
            <div className="card-header" style={isChecked ? {background: '#f3a60b'} : {background: '#96d3ef'}}>
                <h5 className="card-header-title">Caption</h5>
                <input type="checkbox" onChange={() => setChecked(!isChecked)}/>
            </div>
            <div className="card-body">Text....</div>
        </div>
    )
}

export default Card