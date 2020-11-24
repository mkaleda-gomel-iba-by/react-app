import React, {useState} from 'react';
import './Card.css'

function Card() {
    let defaultHeader = 'Caption';
    let defaultBody = 'Text...';
    const [isChecked, setChecked] = useState(false)
    const [isEdit, setEdit] = useState(false)

    const changeDisplay = (value) => value ? {display: 'none'} : {display: 'flex'}

    return (
        <div className="card">
            <div className="card-header" style={isChecked ? {background: '#f3a60b'} : {background: '#96d3ef'}}>
                <h5 className="card-header-title" contentEditable={isEdit}>Caption</h5>

                <div className="view-panel" style={changeDisplay(isEdit)}>
                    <i className="far fa-edit"
                       style={{fontSize: '1.2rem'}}
                       onClick={() => {
                           setEdit(true);
                           setChecked(false)
                       }}
                    />
                    <input type="checkbox"
                           checked={isChecked}
                           onChange={() => setChecked(!isChecked)}
                    />
                </div>
                <div className="edit-panel" style={changeDisplay(!isEdit)}>
                    <i className="fa fa-folder" onClick={() => {
                        setEdit(false)
                    }}/>
                    <i className="fa fa-close" onClick={() => {
                        setEdit(false)

                    }}/>
                </div>
            </div>
            <div className="card-body">
                <p contentEditable={isEdit}>Text...</p>
            </div>
        </div>
    )
}

export default Card