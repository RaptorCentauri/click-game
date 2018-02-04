import React from "react";
import "./card.css";

const Card = props =>
  <div className="card">
    <img src={props.image} alt={props.name}/>
  </div>


export default Card;
