import React from "react";

function Tabs(props){
    return <a className="nav-link active" aria-current="page" href={props.link}>{props.heading}</a>
}

export default Tabs;