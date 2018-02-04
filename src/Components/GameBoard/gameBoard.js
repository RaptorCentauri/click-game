import React from "react";
import "./gameBoard.css";
import Card from "../Card/card.js"
import images from "../../images.json"

const GameBoard = () =>
  <div className="game-board">
    {images.map(i => <Card name={i.image} image={`/assets/Images/${i.image}`}/>)}
    {/* <Card image={`/assets/Images/Bane.jpg`}/> */}

  </div>


export default GameBoard;
