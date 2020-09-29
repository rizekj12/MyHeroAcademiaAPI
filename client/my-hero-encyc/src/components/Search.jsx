import React, { Component } from 'react';
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';



import "../css/Search.css"

class Search extends Component {

    state = {
        characters: this.props.characters
    }
    render(){
    return (

        <div 
        className={this.props.formDiv}
        >
           <Form className={this.props.formMheader} onSubmit={(e) => { this.props.getResult(e) }}>
                <Form.Control
                    type="text"
                    placeholder="Search Characters!"
                    value={this.props.inputValue}
                    onChange={this.props.handleChange}
                />
               <Button type="submit" className={this.props.searchButtonSty} variant="danger">{<p className={this.props.buttonText}>PLUS ULTRA!</p>}</Button>
                
            </Form> 
    
           

        </div>
    )
    }
}

export default Search;