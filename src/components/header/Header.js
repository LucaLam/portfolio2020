import React from 'react'

import { Link } from "react-scroll";

import './header.scss'

const Header = () => {
    
        return (
            <div className='header-container'>
            <Link
            activeClass="active"
            to= "about-container"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
            <p className='header-link'>About</p>
            </Link>
            <Link
            activeClass="active"
            to= 'projects-page'
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
            <p className='header-link'>Projects</p>
            </Link>
            <Link
            activeClass="active"
            to= 'contact-page'
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
            <p className='header-link'>Contact</p>
            </Link>
            </div>
        )
}

export default Header
