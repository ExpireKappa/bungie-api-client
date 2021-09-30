import React, { FunctionComponent } from "react";

import "./input.css";

export const Input: FunctionComponent<React.HTMLProps<HTMLInputElement>> = (props) => {
    return (
        <div className={`generic-input__border`}>
            <input {...props} className={`generic-input ${props.className}`}/>  
        </div>
    );
}