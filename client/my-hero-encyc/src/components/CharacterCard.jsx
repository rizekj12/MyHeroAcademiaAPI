import React, { Component } from 'react';
import '../css/CharacterCard.css'
import { Link } from 'react-router-dom'

class CharacterCard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <>
                    <div className="charCardDiv">
                        <h3>{this.props.name}</h3>
                        <Link to={`/Character/${this.props.id}`}>
                        <img className="characterImg" src={this.props.charImg} alt={this.props.name} />
                        </Link>
                </div> 
                
            </>
        );
    }
}

export default CharacterCard;