import React, { Component } from 'react';
import Mheader from './Mheader'
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
                <img src="https://trustthegaijinhome.files.wordpress.com/2019/12/young-deku-crying.gif?w=346" alt="crying deku"/>
            </div> : 
            <>
            <div className="div-not-found"> Oh no! This character does not exist :(</div>
            <img src="https://trustthegaijinhome.files.wordpress.com/2019/12/young-deku-crying.gif?w=346" alt="crying deku"/>
            </>
            }
            
                



            </div>
         );
    }
}
 
export default ResultsPage;