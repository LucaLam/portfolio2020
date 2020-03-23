import React, { Component, Fragment } from 'react'

import './landing.scss'

import headshot from '../../assets/luca_headshot.jpg'

import Header from '../../components/header/Header'

export class Landing extends Component {
    render() {
        return (
            <Fragment>
            <div className='landing'>
                <div className='headshot-headline-container'>
                    <h1 className='landing-headline'>¡Hola, Soy Luca!</h1>
                    <img className='landing-headshot' src={headshot} alt='a headshot of site owner'/>
                    <h2 className='landing-headline--sub'>I'm a Web Developer</h2>
                    {/* <p className='landing-sub-header'>Technologies & Frameworks: ES6, HTML, CSS/SASS/SCSS, React, Node, Express</p>
                    <p className='landing-sub-header'>What I'm Learning: Redux, React Hooks, Advanced ES6 Concepts, UI/UX Design Principles, Gatsby</p> */}
                </div>
                <Header />
            </div>
            </Fragment>
        )
    }
}

export default Landing
