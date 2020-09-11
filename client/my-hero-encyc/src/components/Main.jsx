import React, { Component } from 'react';
import Header from './Header'
import { getCharacters } from '../services/charCrud';
import CharacterCard from './CharacterCard'
import { Route } from "react-router-dom"
import CharacterDetail from "./CharacterDetail"
import Mheader from './Mheader'

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
                <Route path="/" exact >
                <Header />
                    <div className="characterDiv">
                        {this.state.characters.map(character =>
                             
                             <CharacterCard 
                             name={character.name} 
                             alias={character.alias} 
                             charImg={character.image}
                             id={character._id}
                             key={character._id} 
                             />)}
                    </div>
                </Route>

                <Route path="/Character/:id" exact>
                    <CharacterDetail charInfo = {this.state.characters} />
                </Route>

            </div>


        );
    }
}

export default Main;