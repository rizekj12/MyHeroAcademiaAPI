import React from 'react';
import "../css/Pagination.css"

const Pagination = ({charsPerPage, totalChars, paginate}) => {
const pageNumbers = []

for( let i = 1; i <= Math.ceil(totalChars / charsPerPage); i++){
    pageNumbers.push(i)
}

    return( 
    <nav className="pages">
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <a  onClick={() => paginate(number)}  className='page-link'>{number}</a>
                </li>
            ))}

        </ul>
    </nav>
    )
}


export default Pagination