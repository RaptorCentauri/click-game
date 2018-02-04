import React from "react";
import "./gameBoard.css";
import Card from "../Card/card.js"
import images from "../../images.json"


const shuffle = (a) => {
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

shuffle(images);


class GameBoard extends React.Component{

  state = {
      clicked: "false"
    };

  handleClick = id => {
    console.log(this.key);
    console.log(this.state.clicked);
    this.setState({clicked: "true"});
    this.setState();
  }


  render(){
    return(
      <div className="game-board">
        {images.map(i => <Card key={i.id} name={i.image} image={`/assets/Images/${i.image}`} clicked={this.state.clicked} handleClick={this.handleClick}/>)}
      </div>
    )
  }
}

export default GameBoard;





// state = {
//     clicked: "false"
//   };

// handleClick = () => this.setState({clicked: "true"});
