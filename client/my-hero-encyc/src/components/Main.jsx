import React, { Component } from 'react';
import Header from './Header'
import { getCharacters } from '../services/charCrud';
import CharacterCard from './CharacterCard'
import { Route } from "react-router-dom"
import CharacterDetail from "./CharacterDetail"
import Mheader from './Mheader'
import Search from "./Search"

import '../css/Main.css'


class Main extends Component {
    state = { 
        characters: [],
        inputValue: "",
        filteredChars: [],
        foundChar: true

    }

    async componentDidMount() {
        const response = await getCharacters()
        this.setState({
            characters: response,
            filteredChars: response
        })
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            inputValue: e.target.value
        })
    }

    
    filterFunct = (results) => {
        if(results.length > 0){
            this.setState({
                filteredChars: results,
            })

        }else{
            this.setState({
                foundChar:false
            })
        }
    }



    render() {
        return (
            <div>
                <Route path="/" exact >
                <Header />
                    <Search foundchar={this.state.foundChar} filtered={this.state.filteredChars} data={this.state.characters} inputValue={this.state.inputValue} handleChange={this.handleChange} 
                        filterFunct = {this.filterFunct}
                    />
                    <div className="characterDiv">
                        {this.state.filteredChars.map(character =>
                             
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