import React from 'react'

import {Link} from 'react-router-dom'

import './header.scss'

const Header = () => {
    
        return (
            <div className='header-container'>
                <Link to='/about'>
                    <p className='header-link'>About</p>
                </Link>
                <Link to='/projects'>
                <p className='header-link'>Projects</p>
                </Link>
                <Link to='/contact'>
                <p className='header-link'>Contact</p>
                </Link>
            </div>
        )
}

export default Header
