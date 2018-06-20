import React from 'react';

export default function Output(props) {
    const justText = <div id="output">
                        <span>{props.make} {props.model}</span>
                    </div>;
    const textAndLink = <div id="output">
                            <span>{props.make} {props.model}</span>
                            <br></br>
                            <a href={`https://www.autobytel.com/${props.make.toLowerCase()}/${props.model.toLowerCase()}/pictures/`} target="_blank">View {props.make} {props.model} Pics</a>
                        </div>;
    const returnVal = props.model ? textAndLink : justText;

    return (
        
            returnVal
        
    )
}