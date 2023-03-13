import React from "react";
import OutputScreen from "./outputScreen";

const Button = (props) => {
    return (
        <input
            onClick={props.onClick}
            type="button"
            value={props.label}
        />

    )
}

export default Button;