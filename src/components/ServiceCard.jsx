import React from "react";

function ServicesCard(props){
    return <div className="col">
    <div className="card shadow-sm">
      <img className="bd-placeholder-img card-img-top" width="100%" height="225" src={props.img} alt={props.title} focusable="false"/>
      <div className="card-body">
        <h2 className="casd-title">{props.title}</h2>
        <p className="card-text fw-medium">{props.text}</p>
      </div>
    </div>
  </div>
}
export default ServicesCard;