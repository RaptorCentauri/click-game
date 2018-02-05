import React from "react";
import "./card.css";

class Card extends React.Component{

  state = {
    clicked: false,
  };

  hasCardBeenClicked = () => {
    console.log(this.props.name);
    console.log(this.state.clicked);
    this.state.clicked ? this.props.gameOver() : this.setState({clicked:true}, this.props.updateScore());
    // this.props.updateScore()
    console.log(`===================================`);
  };





  render(){
    return(
      <div className="card" clicked={this.state.clicked.toString()} onClick={() => {this.hasCardBeenClicked(); this.props.shuffleCards()}}>
        <img src={this.props.image} alt={this.props.name}/>
      </div>
    );
  }
}

export default Card;
