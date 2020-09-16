import React, { Component } from "react";
import Header from "./Header";
import { getCharacters } from "../services/charCrud";
import CharacterCard from "./CharacterCard";
import { Route } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";
import Mheader from "./Mheader";
import Search from "./Search";
import { Button } from "react-bootstrap";
import Pagination from "./Pagination"
import Footer from "./Footer"

import "../css/Main.css";

class Main extends Component {
  state = {
    characters: [],
    inputValue: "",
    filteredChars: [],
    foundChar: true,
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
    this.createPages(response);
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
    } else {
      this.setState({
        foundChar: false,
      });

      console.log("character not found");
    }
  };

  createPages = (arr) => {
    let count = Math.ceil(arr.length / 12);
    this.setState({
      pageCount: count,
    });
  };

  paginate = (pageNumber) => {
      this.setState({
        currentPage: pageNumber
      })
  }

 
  render() {
      const indexOfLastChar = this.state.currentPage * this.state.postPerPage
      const indexOfFirstChar = indexOfLastChar - this.state.postPerPage
      const currentChars = this.state.characters.slice(indexOfFirstChar,indexOfLastChar)
      console.log(currentChars)
    return (
      <div>
        <Route path="/" exact>
          <Header />
          <Search
            foundchar={this.state.foundChar}
            filtered={this.state.filteredChars}
            data={this.state.characters}
            inputValue={this.state.inputValue}
            handleChange={this.handleChange}
            filterFunct={this.filterFunct}
          />
          <div className="characterDiv">
            {currentChars.map((character) => (
              <CharacterCard
                name={character.name}
                alias={character.alias}
                charImg={character.image}
                id={character._id}
                key={character._id}
              />
            ))}
          </div>
               
          
          <Pagination className="pages" charsPerPage={this.state.postPerPage} totalChars={this.state.characters.length} paginate={this.paginate}/>
          <Footer/>
        </Route>

        <Route path="/Character/:id" exact>
          <CharacterDetail charInfo={this.state.characters} />
        </Route>
      </div>
    );
  }
}

export default Main;
