import React from 'react';

export default function DropDown(props) {
    return (
        <div id="make">
            <label for="pet-select">Choose a pet:</label>

            <select id="pet-select">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
                <option value="none" selected>--Please choose an option--</option>
            </select>
        </div>
    )
}