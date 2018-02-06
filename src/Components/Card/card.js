import React from "react";
import "./card.css";

class Card extends React.Component{

  state = {
    clicked: this.props.clicked,
  };

  handleClick = () => {
    console.log(this.props.name);
    console.log(`PROPS: ${this.props.clicked}`);
    console.log(`STATE: ${this.state.clicked}`);

    if (this.state.clicked){
      console.log(`state was already true`);
      this.props.gameOver()
    }
    else {
      this.setState({clicked: true})
      this.props.updateScore();
      // this.props.shuffleCards();
    }
    console.log(`===================================`);
  };





  render(){
    return(
      <div className="card" onClick={this.handleClick}>
        <h5>{this.state.clicked.toString()}</h5>
        <img src={this.props.image} alt={this.props.name}/>
      </div>
    );
  }
}

export default Card;
