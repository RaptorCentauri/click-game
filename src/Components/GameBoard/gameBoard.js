import React from "react";
import "./gameBoard.css";
// import Card from "../Card/card.js"
// import images from "../../images.json"

// const shuffle = (a) => {
//   for (let i = a.length; i; i--) {
//       let j = Math.floor(Math.random() * i);
//       [a[i - 1], a[j]] = [a[j], a[i - 1]];
//   }
// }
//
// shuffle(images);

class GameBoard extends React.Component{

  // shuffleCards = () => {
  //   shuffle(images)
  //   this.setState(images);
  // }

  render(){
    return(
      <div className="game-board">
        {this.props.children}
        {/* {images.map(i => <Card key={i.id} name={i.image} image={`/assets/Images/${i.image}`} shuffleCards={this.shuffleCards}/>)} */}
      </div>
    )
  }
}

export default GameBoard;
