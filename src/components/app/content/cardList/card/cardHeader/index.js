import React, { Fragment } from 'react';
import classNames from 'classnames';
import './index.css';
import { selectCard } from '../../../../../../redux/actions';
import {useDispatch} from "react-redux";

function CardHeader(props) {
    const dispatch = useDispatch();
    const editPanel = (
        <Fragment>
            <i
                className="fa fa-folder"
                onClick={() => props.saveCardDataChanges()}
            />
            <i
                className="fa fa-close"
                onClick={() => props.restoreCardDataChanges()}
            />
        </Fragment>
    );

    const viewPanel = (
        <Fragment>
            {props.readOnly || props.cardOptions.checked || (
                <i
                    className="fa fa-pencil"
                    aria-hidden="true"
                    onClick={() => props.editMode()}
                />
            )}
            <input
                type="checkbox"
                checked={props.cardOptions.checked}
                onChange={() => dispatch(selectCard(props.card.id))}
            />
        </Fragment>
    );

    let panel = props.cardOptions.editable ? editPanel : viewPanel;

    return (
        <div
            className={classNames('card-header', {
                'card-header-active': props.cardOptions.checked,
            })}
        >
            <input
                className="card-header-title card-header-title-layout"
                type="text"
                value={props.card.header}
                disabled={!props.cardOptions.editable}
                onInput={(event) => props.fillData({ header: event.target.value })}
            />
            <div className="panel panel-layout">{panel}</div>
        </div>
    );
}

export default CardHeader