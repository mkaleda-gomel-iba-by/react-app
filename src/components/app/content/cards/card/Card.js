import React, {useEffect, useState} from 'react';
import './Card.css'

function Card({readonly}) {
    const changeDisplay = (value) => value ? {display: 'none'} : {display: 'flex'}

    const [isChecked, setChecked] = useState(false)
    const [isEdit, setEdit] = useState(false)
    const [header, setHeader] = useState('Caption')
    const [backupHeader, setBackupHeader] = useState(header)
    const [body, setBody] = useState('Text...')
    const [backupBody, setBackupBody] = useState(body)

    useEffect(() => {
        setEdit(false);
        setHeader(backupHeader)
        setBody(backupBody)
    }, [readonly])

    return (
        <div className="card">
            <div className="card-header" style={isChecked ? {background: '#f3a60b'} : {background: '#96d3ef'}}>
                <input className="card-header-title" type="text" value={header} disabled={!isEdit}
                       onInput={(e) => setHeader(e.target.value)}/>
                <div className="view-panel" style={changeDisplay(isEdit) }>
                        <i className="fa fa-pencil" aria-hidden="true"
                           style={changeDisplay(readonly)}
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
                <div className="edit-panel" style={changeDisplay(!isEdit || readonly)}>
                    <i className="fa fa-folder" onClick={() => {
                        setEdit(false)
                        setBackupHeader(header)
                        setBackupBody(body)
                    }}/>
                    <i className="fa fa-close"  onClick={() => {
                        setEdit(false)
                        setHeader(backupHeader)
                        setBody(backupBody)
                    }}/>
                </div>
            </div>
            <div className="card-body">
                <textarea value={body} disabled={!isEdit}
                          onInput={(e) => setBody(e.target.value)}/>
            </div>
        </div>
    )
}

export default Card