import React from 'react';
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';



import "../css/Search.css"

function Search(props) {

    return (

        <div className="formDiv">
            <Form onSubmit={(e) => { props.getResult(e) }}>
                <Form.Control
                    type="text"
                    placeholder="Search Characters!"
                    value={props.inputValue}
                    onChange={props.handleChange}
                />
               <Button type="submit" className="searchButton" variant="danger">PLUS ULTRA!</Button>
                
            </Form>
            
           

        </div>
    )

}

export default Search;