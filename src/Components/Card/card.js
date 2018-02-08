import React from "react";
import "./card.css";

class Card extends React.Component{

  render(){
    return(
      <div className="card" onClick={this.props.handleCardClick}>
        {/* <h5>{this.props.wasClicked.toString()}</h5> */}
        <img src={this.props.image} alt={this.props.name}/>
      </div>
    );
  }
}

export default Card;
