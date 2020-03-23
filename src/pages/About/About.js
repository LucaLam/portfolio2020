import React from 'react';

import './about.scss';

import about1 from "../../assets/about-img.jpg";
import about2 from "../../assets/about-img-2.jpg";
import about3 from "../../assets/about-img-3.jpg";

const About =()=> {
        return (
          <div className="about-container">
            <h1 className='about-header'>About Me</h1>
            <p className="about-text">
              After 2+ years of teaching English in Quito, Ecuador, I was on the
              pursuit for something that offered regular challenges and greater
              opportunities to learn. That's when I found coding.
            <br />
            
              I’ve recently graduated from BrainStation’s full-time
              intensive Web Development program and during my time at
              BrainStation, I have not only learned many programming languages
              and frameworks, but I’ve also learned to embrace the challenges
              that development presents.
              <br />
              I'm hoping to find an opportunity to code meaningful technology
              with cool people and I hope that technology will better the lives
              of many.
              <br />
              When I'm not working or coding, you can find me on a hike and
              snapping photos, doing Brazilian Jiu-Jitsu, or making a cocktail
              with Campari.
            </p>
            <div className="img-container">
            <img src={about1} alt="" className="about-img"/>
            <img src={about2} alt="" className="about-img"/>
            <img src={about3} alt="" className="about-img"/>
            </div>
          </div>
        );
}

export default About
