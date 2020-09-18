import React, { Component } from 'react';
import Mheader from './Mheader'
import Search from './Search';
import CharacterCard from "./CharacterCard"
import '../css/ResultsPage.css'

class ResultsPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Mheader />
                {
            
            this.props.foundChar === true ? 
            <div>
                <img src="https://trustthegaijinhome.files.wordpress.com/2019/12/young-deku-crying.gif?w=346" alt=""/>
               {/* {this.props.filteredData.map((character) => (
              <CharacterCard
                name={character.name}
                alias={character.alias}
                charImg={character.image}
                id={character._id}
                key={character._id}
              /> */}
               
            {/* ))
               } */}
            </div> : 
            <>
            <div className="div-not-found"> Oh no! This character does not exist :(</div>
            <img src="https://trustthegaijinhome.files.wordpress.com/2019/12/young-deku-crying.gif?w=346" alt=""/>
            </>
            }
            
                



            </div>
         );
    }
}
 
export default ResultsPage;