import React from 'react';

export default function Output(props) {
    // const = props.cars;

    return (
        <div id="output">
            <span>{props.make} {props.model}</span>
        </div>
    )
}