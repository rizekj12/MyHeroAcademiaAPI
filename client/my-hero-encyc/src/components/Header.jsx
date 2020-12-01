import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../css/Header.css'

class Header extends Component {
   
    render() { 
        return (  
            <div>
                <Link to="/"><img src="https://i.cdn.turner.com/adultswim/big/img/2018/05/10/MHA_1appHeader.png" alt="my hero academia logo"/></Link>
                <h2 className="intro-text">Welcome to the My Hero Academia Encyclopedia!</h2>
            </div>
        );
    }
}
 
export default Header;