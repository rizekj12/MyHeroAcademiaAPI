import React, { Component } from "react";
import Header from "./Header";
import { getCharacters } from "../services/charCrud";
import CharacterCard from "./CharacterCard";
import { Route, withRouter} from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import Mheader from "./Mheader";
import Search from "./Search";
import Pagination from "./Pagination"
import Footer from "./Footer"
import ResultsPage from './ResultsPage'

import "../css/Main.css";

class Main extends Component {
  state = {
    characters: [],
    inputValue: "",
    filteredChars: [],
    foundChar: false,
    currentPage: 1,
    pageCount: 0,
    postPerPage: 8
  };

  async componentDidMount() {
    const response = await getCharacters();
    this.setState({
      characters: response,
      filteredChars: response,
    });

  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      inputValue: e.target.value,
    });
  };

  filterFunct = (results) => {
    if (results.length > 0) {
      this.setState({
        filteredChars: results,
      });
    } 
    else {
      this.setState({
        foundChar: false,
      });

      console.log("character not found");
    }
  };


 getResult = (e) => {
    e.preventDefault()
    let results = this.state.characters.filter(char => {
        return char.alias.toLowerCase().includes(this.state.inputValue.toLowerCase()) || char.name.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })
    
   this.filterFunct(results)
   if(results.length > 0){
   this.setState({
       foundChar: true
   })
this.props.history.push(`/Character/${results[0]._id}`) 
   }else {
    this.props.history.push("/Results")     
   }
     
}
  paginate = (pageNumber) => {
      this.setState({
        currentPage: pageNumber
      })
  }  
 
  render() {
      const indexOfLastChar = this.state.currentPage * this.state.postPerPage
      const indexOfFirstChar = indexOfLastChar - this.state.postPerPage
      const currentChars = this.state.characters.slice(indexOfFirstChar,indexOfLastChar)
    return (
      <div>
        <Route path="/" exact>
          <Header />
          <Search
            handleChange={this.handleChange}
            getResult={this.getResult}
            formDiv="formDiv"
            searchButtonSty="searchButton"
          />
          <hr/>
          <div className="characterDiv">
            
            {currentChars && currentChars.map((character) => (
              <CharacterCard
                name={character.name}
                alias={character.alias}
                charImg={character.image}
                id={character._id}
                key={character._id}
              />
            ))}
          </div>
          <hr/>
              
          
          <Pagination className="pages" charsPerPage={this.state.postPerPage} totalChars={this.state.characters.length} paginate={this.paginate}/>
          <Footer/>
        </Route>

        <Route path="/Character/:id" exact>
          <CharacterDetail 
          charInfo={this.state.characters} 
          handleChange={this.handleChange}
          getResult={this.getResult}/>
        </Route>

        <Route path="/Results">
            <ResultsPage foundChar={this.state.foundChar} filteredData={this.state.filteredChars}/>
        </Route>
      </div>
    );
  }
}

export default withRouter(Main);
