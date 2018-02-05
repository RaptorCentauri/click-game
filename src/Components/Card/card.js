import React from "react";
import "./card.css";

class Card extends React.Component{

  state = {
    clicked: false
  };

  setClick = () => {
    console.log(this.props.name);
    console.log(this.state.clicked);

    this.state.clicked ? console.log("Already True") : this.setState({clicked:true}) ;
  };


  render(){
    return(
      <div className="card" clicked={this.state.clicked.toString()} onClick={() => {this.setClick(); this.props.handleClick()}}>
        <img src={this.props.image} alt={this.props.name}/>
      </div>
    );
  }
}

export default Card;
