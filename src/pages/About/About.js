import React from 'react'

// import Tech from '../../components/technology-component/Tech'

import './about.scss'

const About =()=> {
        return (
          <div className="about-container">
            <h1 className='about-header'>About Me</h1>
            <p className="about-text">
              After 2+ years of teaching English in Quito, Ecuador, I was on the
              pursuit for something that offered regular challenges and greater
              opportunities to learn. That's when I found coding.
            </p>
            <br/>
            <p className="about-text">
              I’ve recently graduated from BrainStation’s 12-week full-time
              intensive Web Development program and during my time at
              BrainStation, I have not only learned many programming languages
              and frameworks, but I’ve also learned to embrace the challenges
              that development presents.
            </p>
            <p className="about-text">
              I'm hoping to find an opportunity to code meaningful technology
              with cool people and I hope that technology will better the lives
              of many.
            </p>
            <br />
            <p className="about-text">
              When I'm not working or coding, you can find me on a hike and
              snapping photos, doing Brazilian Jiu-Jitsu, or making a cocktail
              with Campari.
            </p>
            {/* <Tech /> */}
          </div>
        );
}

export default About
