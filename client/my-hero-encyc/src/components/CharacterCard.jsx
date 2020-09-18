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
            {this.props.id === "5f624b7b6527ac6a9aded9a5" ? 
            
            <div className="charCardDiv">
                        <h3>{this.props.alias.slice(16,)}</h3>
                        <Link to={`/Character/${this.props.id}`}>
                        <img className="characterImg" src={this.props.charImg} alt="character image" />
                        </Link>
                    </div> :  <div className="charCardDiv">
                        <h3>{this.props.alias}</h3>
                        <Link to={`/Character/${this.props.id}`}>
                        <img className="characterImg" src={this.props.charImg} alt="character image" />
                        </Link>
                    </div>
            }
                    {/* <div className="charCardDiv">
                        <h3>{this.props.alias}</h3>
                        <Link to={`/Character/${this.props.id}`}>
                        <img className="characterImg" src={this.props.charImg} alt="character image" />
                        </Link>
                    </div> */}
                
            </>
        );
    }
}

export default CharacterCard;