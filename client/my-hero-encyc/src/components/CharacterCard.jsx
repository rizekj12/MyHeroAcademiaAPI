import React, { Component } from 'react';
import '../css/CharacterCard.css'

class CharacterCard extends Component {
   constructor(props){
       super(props)
       this.state = {

       }
   }
    render() { 
        return (
            <div className="charCardDiv">
                <h3>{this.props.alias}</h3>
                <img className="characterImg" src={this.props.charImg} alt="character image"/>
            </div>
          );
    }
}
 
export default CharacterCard;