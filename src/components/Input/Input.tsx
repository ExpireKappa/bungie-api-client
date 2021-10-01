import React, { FunctionComponent, useState } from "react";

import "./input.css";

export const Input: FunctionComponent<React.HTMLProps<HTMLInputElement>> = (props) => {
    let [isFocussed, setIsFocussed] = useState<boolean>(false);
    
    return (
        <div className={`generic-input__border ${isFocussed ? "focus" : ""}`}>
            <input {...props} 
                className={`generic-input ${props.className}`}
                onFocus={() => setIsFocussed(true)}
                onBlur={() => setIsFocussed(false)}/>  
        </div>
    );
}

