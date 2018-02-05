import React, { Component } from 'react';
// import Components from "./Components/index.js"
import Scorebar from "./Components/Scorebar/scorebar.js"
import Header from "./Components/Header/header.js"
import GameBoard from "./Components/GameBoard/gameBoard.js"
import Card from "./Components/Card/card.js"
import images from "./images.json"


const shuffle = (a) => {
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
};


class App extends Component {

  shuffleCards = () => {
    shuffle(images)
    this.setState(images);
  }

  state = {
    score: 0,
    topscore: 0
  }

  render() {
    return(
      <div>
        <Scorebar score={this.state.score} topscore={this.state.topscore}/>
        <Header />
        <GameBoard>
          {images.map(i => <Card key={i.id} name={i.image} image={`/assets/Images/${i.image}`} shuffleCards={this.shuffleCards} score={this.state.score}/>)}
        </GameBoard>
      </div>
    )
  }
}

export default App;
