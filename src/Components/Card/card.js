import React from "react";
import "./card.css";

// class Card extends React.Component{
//
//
//   render(props){
//     return(
//       <div className="card" onClick={() => props.handleClick(props.id)}>
//         <img src={this.props.image} alt={this.props.name}/>
//       </div>
//     );
//   }
// }



const Card = props =>
      <div className="card" onClick={() => props.handleClick(props.id)}>
        <img src={props.image} alt={props.name}/>
      </div>


















export default Card;
