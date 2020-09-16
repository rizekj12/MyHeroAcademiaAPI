import React from 'react';
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

import "../css/Search.css"

function Search(props) {
    const getResult = (e) => {
        e.preventDefault()
        let results = props.data.filter(char => {
            return char.alias.toLowerCase().includes(props.inputValue.toLowerCase()) || char.name.toLowerCase().includes(props.inputValue.toLowerCase())
        })
        props.filterFunct(results)    
    }

    return (

        <div className="formDiv">
            <Form onSubmit={(e) => { getResult(e) }}>
                <Form.Control
                    type="text"
                    placeholder="Search Characters!"
                    value={props.inputValue}
                    onChange={props.handleChange}
                />
                <Button type="submit" className="searchButton" variant="danger">Plus Ultra!</Button>
                
            </Form>
            {props.foundchar === false ? <h3>Character not found :(</h3> : <h1></h1>}
           

        </div>
    )

}

export default Search;