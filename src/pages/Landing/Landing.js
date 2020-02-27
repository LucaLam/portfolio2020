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
                </div>
                <Header />
            </div>
            </Fragment>
        )
    }
}

export default Landing
