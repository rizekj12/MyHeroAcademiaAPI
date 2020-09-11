import React, { Component } from 'react';
import '../css/CharacterDetail.css'
import Mheader from './Mheader'
import { withRouter } from 'react-router-dom'

class CharacterDetail extends Component {
    render() { 
        const charId = this.props.match.params.id
        const selectedChar = this.props.charInfo.find(character =>{
           return  charId === character._id
        })
        console.log(selectedChar)
        return (  
            <div>
                <Mheader/>
                <h1>Character Detail</h1>
                {selectedChar && <div>
                    <h2>{selectedChar.alias}</h2>
                    <img className="char-det-img" src={selectedChar.image} alt={`image of ${selectedChar.name}`}/>
                    <h4>{selectedChar.name}</h4>
                    <p>Quirk: {selectedChar.quirk}</p>
                    <p>Occupation: {selectedChar.occupation}</p>
                    <p>Status: {selectedChar.status}</p>

                </div>}
            </div>
        );
    }
}
 
export default withRouter(CharacterDetail)
