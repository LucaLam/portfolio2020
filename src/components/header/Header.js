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
            <p className='header-link'>About &darr;</p>
            </Link>
            <Link
            activeClass="active"
            to= 'projects-page'
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
            <p className='header-link'>Projects &darr;</p>
            </Link>
            <Link
            activeClass="active"
            to= 'contact-page'
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}>
            <p className='header-link'>Contact &darr;</p>
            </Link>
            </div>
        )
}

export default Header
