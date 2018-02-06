import React from "react";
import "./gameBoard.css";

class GameBoard extends React.Component{
  render(){
    return(
      <div className="game-board">
        {this.props.children}
      </div>
    )
  }
}

export default GameBoard;
