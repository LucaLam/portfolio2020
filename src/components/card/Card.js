import React from 'react'

import './card.scss'

const Card =({project})=> {

    const {name, description, gitUrl, projectUrl} = project
    
        return (
            <div className='project-card'>
            <h1 className='project-card-title'>{name}</h1>
            <p className='project-card-description'>{description}</p>
            <div className='button-container'>
            <a href={gitUrl} target='_blank' rel="noopener noreferrer">
            <div className={!gitUrl ? 'blank-out' : 'button' }>See Code</div>
            </a>
            <a href={projectUrl} target='_blank' rel="noopener noreferrer">
            <div className={!projectUrl ? 'blank-out' : 'button' }>Online</div>
            </a>
            </div>
            </div>
        )
}

export default Card
