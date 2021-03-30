import React, { useState } from 'react';
import './index.css';
import { updateCard } from '../../../../redux/actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Card(props) {
    const [tempState, setTempState] = useState(props.location.cardData);
    const history = useHistory();

    const fillData = (data) => setTempState({ ...tempState, ...data });

    const saveCardHandler = () => {
        props.updateCard(tempState);
        history.push('/');
    };

    return (
        <div className="container">
            <div className="single-card">
                <div className="single-card-header">
                    <input
                        type="text"
                        value={tempState.header}
                        onChange={(event) =>
                            fillData({ header: event.target.value })
                        }
                    />
                    <button
                        className="btn btn-primary"
                        onClick={() => saveCardHandler()}
                    >
                        Save card changes
                    </button>
                </div>
                <div className="single-card-body">
                    <textarea
                        value={tempState.body}
                        onChange={(event) => fillData({ body: event.target.value })}
                    />
                </div>
            </div>
        </div>
    );
}

export default connect(null, { updateCard })(Card);