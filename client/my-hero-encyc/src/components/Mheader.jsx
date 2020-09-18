import React, { Component } from 'react';
import { Link } from "react-router-dom"
import '../css/Mheader.css'

class Mheader extends Component {
    state = {}
    render() {
        return (

            <div className="Mhead-div">
                
                    <div className="header-div">
                    <Link to="/">
                        <img 
                        src="https://i.pinimg.com/originals/4c/67/51/4c67516ab6bf8f6ebda56b8bfb064d41.png" 
                        alt="my hero logo"
                        className="hero-logo"
                />
                 </Link>
                {/* <h2 className="header-text">{this.props.head}</h2> */}
                    </div>
                
            </div>
        );
    }
}

export default Mheader;