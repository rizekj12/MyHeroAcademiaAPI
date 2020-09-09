import React, { Component } from 'react';
import Header from './Header'
import { getCharacters } from '../services/charCrud';
import CharacterCard from './CharacterCard'
import Carousel from "react-elastic-carousel"

import '../css/Main.css'


class Main extends Component {
    state = { characters: [] }

    async componentDidMount() {
       const response = await getCharacters()
       this.setState({
           characters: response
       })
    }
    
    

    render() { 
        return ( 
            <div>
              <Header /> 
              {/* <div className="characterDiv">
                  {this.state.characters.map(character => <CharacterCard name={character.name} charImg ={character.image}/>)}
              </div> */}
              {/* <CharacterCard characters={this.state.characters}/> */}
               
              <Carousel>
                    {this.state.characters.map(character => <div>
                    <h1>{character.alias}</h1>
                    <img className="carousel-img" src={character.image} alt="characterImg"/>
                    </div>)}
                </Carousel>



            </div>
        );
    }
}
 
export default Main;