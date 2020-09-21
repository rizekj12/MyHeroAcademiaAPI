import React, { Component } from 'react';
import '../css/CharacterDetail.css'
import Mheader from './Mheader'
import { withRouter } from 'react-router-dom'
import Footer from "./Footer"

class CharacterDetail extends Component {
    render() { 
        const charId = this.props.match.params.id
        const selectedChar = this.props.charInfo.find(character =>{
           return  charId === character._id
        })
   
        return (  
            <div className="mainDiv">
                <Mheader 
                handleChange={this.props.handleChange}
                getResult={this.props.getResult}
                head="Character Detail"/>
                {selectedChar && <div className="detailDiv">
                    <h2 className="char-header">{selectedChar.alias}</h2>
                    <hr/>

                    <img className="char-det-img" src={selectedChar.image} alt={`image of ${selectedChar.name}`}/>
                    <h4 className="char-real-name">{selectedChar.name}</h4>
                    <div className="stats-div">
                        <hr/>
                    <span className="span">Quirk:</span><p>{selectedChar.quirk}</p>
                    <span className="span">Occupation:</span><p>{selectedChar.occupation}</p>
                    <span className="span">Status:</span><p>{selectedChar.status}</p>
                    <span className="span">Age:</span><p>{selectedChar.age}</p>
                    <span className="span">Height:</span><p>{selectedChar.height}</p>
                    <span className="span">Birthday:</span><p>{selectedChar.birthday}</p>
                    </div>

                </div>}
            <Footer/>
            </div>
        );
    }
}
 
export default withRouter(CharacterDetail)
