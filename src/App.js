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
    clicked: {},
    moveAlert: ""
  }


  gameWin = () => {
      if(this.state.score >= images.length-1){
      this.setState({moveAlert: "YOU WON!"})
    }
  }

  handleCardClick = (id) => {
    //Good Move
    if(!this.state.clicked[id]){
      this.setState({clicked: Object.assign(this.state.clicked, {[id]: true}), moveAlert:"Good Move!"})
      this.updateScore();
      this.gameWin();
      this.shuffleCards();
    }

    //Badmove
    else {
      this.setState({moveAlert: "Game Over!", score: 0, clicked:{}});
    }
  };


  updateScore = (score) => {
    this.setState({score: this.state.score+1});

    if (this.state.score >= this.state.topscore){
      this.setState({topscore: this.state.topscore+1});
    }
  };


  render() {
    return(
      <div>
        <Scorebar moveAlert={this.state.moveAlert} score={this.state.score} topscore={this.state.topscore}/>
        <Header />
        <GameBoard>
          {images.map(i => <Card
            key={i.id}
            name={i.image}
            wasClicked={this.state.clicked[i.id] ? true : false}
            handleCardClick={() => { this.handleCardClick(i.id) }}
            image={`/assets/Images/${i.image}`}
            newgame={this.state.newgame}
            />)}
        </GameBoard>
      </div>
    )
  }
}

export default App;
