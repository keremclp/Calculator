import React from "react";

// Create Functional Component.
// Takes title as props.value.
const Calculatortitle = (props) => {
    return (
        <div className="calculator-title">
            {props.value}
        </div>
    )
}

export default Calculatortitle;