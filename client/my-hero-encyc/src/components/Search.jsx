import React from 'react';
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';



import "../css/Search.css"

function Search(props) {

    return (

        <div 
        className={props.formDiv}
        >
            <Form className={props.formMheader} onSubmit={(e) => { props.getResult(e) }}>
                <Form.Control
                    type="text"
                    placeholder="Search Characters!"
                    value={props.inputValue}
                    onChange={props.handleChange}
                />
               <Button type="submit" className={props.searchButtonSty} variant="danger">{<p className={props.buttonText}>PLUS ULTRA!</p>}</Button>
                
            </Form>
            
           

        </div>
    )

}

export default Search;