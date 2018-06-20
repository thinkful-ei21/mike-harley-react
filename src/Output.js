import React from 'react';

export default function Output(props) {
    return (
        <div id="output">
            <h3>{props.make} {props.model}</h3>
        </div>
    )
}