import React from 'react';
import Checkbox from '../content/Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { changeReadOnlyMode } from '../../../redux/actions';
import './index.css';

export default function Settings() {
    const dispatch = useDispatch();
    const readOnly = useSelector((state) => state.cards.readOnly);
    return (
        <div className="settings">
            <Checkbox
                setChecked={() => dispatch(changeReadOnlyMode())}
                checked={readOnly}
                label={'Readonly'}
            />
        </div>
    );
}
