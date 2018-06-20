import React from 'react';

export default function DropDown(props) {
    // const = props.cars;

    return (
        <div id={props.selectType}>
            <label for={`${props.selectType}-select`}>Choose a {props.selectType}:</label>

            <select id={`${props.selectType}-select`} onChange={e => props.pickValue(e.target.value)}>
                {props.cars}
                <option value="none" selected>--Please choose {props.selectType}--</option>
            </select>
        </div>
    )
}