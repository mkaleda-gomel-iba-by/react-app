import React from 'react';
import styled from 'styled-components';

const Checkmark = styled.span`
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border: 2px solid rebeccapurple;
    border-radius: 5px;

    &:after {
        content: '';
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
`;

const Input = styled.input.attrs({ type: 'checkbox' })`
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
`;

function Checkbox(props) {
    return (
        <label>
            <Input
                checked={props.checked}
                onChange={() => props.setChecked(!props.checked)}
            />
            {props.label}
            <Checkmark />
        </label>
    );
}

export default Checkbox