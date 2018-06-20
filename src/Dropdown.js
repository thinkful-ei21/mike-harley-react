import React from 'react';

export default function DropDown(props) {
    // const = props.cars;

    return (
        <div id="make">
            <label for="make-select">Choose a make:</label>

            <select id="make-select" onChange={e => props.pickValue(e.target.value)}>
                {props.cars}
                <option value="none" selected>--Please choose an option--</option>
            </select>
        </div>
    )
}