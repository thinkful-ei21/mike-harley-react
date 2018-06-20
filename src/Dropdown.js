import React from 'react';

export default function DropDown(props) {
    // const = props.cars;

    return (
        <div id={props.selectType}>
            <label htmlFor={`${props.selectType}-select`}>Choose a {props.selectType}:</label>

            <select id={`${props.selectType}-select`} onChange={e => props.pickValue(e.target.value)}>
                <option value="none" defaultValue>--Please choose {props.selectType}--</option>
                {props.cars}
            </select>
        </div>
    )
}