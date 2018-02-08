import React from "react";
import "./scorebar.css";

class Scorebar extends React.Component {
  render(){
    return(
      <div className="scorebar-style">
        <h3>Clicky Game</h3>
        <h5>{this.props.moveAlert}</h5>
        <h5>Score: {this.props.score} | Top Score: {this.props.topscore}</h5>
      </div>
    );
  }

};




export default Scorebar;
