import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <span>
                sextant
            </span>

            <ul>
                <li> Home </li>
                <li> Overview </li>
                <li> Features </li>
                <li> FAQS </li>
            </ul>

            <button>
                <a href='https'> Sign In</a>
            </button>
        </div>
    )
}

export default Header