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
  }

  state = {
    score: 0,
    topscore: 0,
    newgame: false
  }


  updateScore = (score) => {
    this.setState({score: this.state.score+1});

    if (this.state.score >= this.state.topscore){
      this.setState({topscore: this.state.topscore+1});
    }
  };

  gameOver = (score) => {
    this.setState({score: 0});
    this.setState({clicked: false});
};



  changeClick = (newgame) => this.setState({newgame});

  render() {
    return(
      <div>
        <Scorebar clicked={this.state.newgame} score={this.state.score} topscore={this.state.topscore}/>
        <Header />
        <GameBoard>
          {images.map(i => <Card
            key={i.id}
            name={i.image}
            image={`/assets/Images/${i.image}`}
            shuffleCards={this.shuffleCards}
            updateScore={this.updateScore.bind(this)}
            gameOver={this.gameOver.bind(this)}
            newgame={this.state.newgame}
            changeClick={this.changeClick}
            />)}
        </GameBoard>
      </div>
    )
  }
}

export default App;
