import React from 'react'

import './card.scss'

const Card =({project})=> {

    const {name, description, gitUrl, projectUrl, video, image} = project
    
        return (
          <div className="project-card">

            <div className="project-card__left">
            {
              video ? <video className="project-card__video" autoPlay muted loop>
                  <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
                </video> : <img src={image} alt="project"  className="project-card__video"/>
            }
            </div>
            
            <div className="project-card__right">
              <h1 className="project-card-title">{name}</h1>
              <p className="project-card-description">{description}</p>
              <div className="button-container">
                <a href={gitUrl} target="_blank" rel="noopener noreferrer">
                  <div className={!gitUrl ? "blank-out" : "button"}>
                    See Code
                  </div>
                </a>
                <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                  <div className={!projectUrl ? "blank-out" : "button"}>
                    Online
                  </div>
                </a>
              </div>
            </div>
          </div>
        );
}

export default Card
