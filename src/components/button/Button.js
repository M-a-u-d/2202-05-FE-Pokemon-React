import React from "react";
import "./Button.css"

function Button ({ childeren, clickHandler,}) {
return (

<button
    type="button"
    onClick={clickHandler}
>
    <h4>{ childeren }</h4>

</button>

);
}

export default Button;

