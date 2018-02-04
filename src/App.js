import React, { Component } from 'react';
// import Components from "./Components/index.js"
import Scorebar from "./Components/Scorebar/scorebar.js"
import Header from "./Components/Header/header.js"
import GameBoard from "./Components/GameBoard/gameBoard.js"

class App extends Component {
  render() {

    return(
      <div>
        <Scorebar />
        <Header />
        <GameBoard />
      </div>
    )
  }
}

export default App;
