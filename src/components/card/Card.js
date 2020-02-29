import React from 'react'

import './card.scss'

const Card =({project})=> {

    const {name, description, images} = project
    
        return (
            <div>
            <h1>{name}</h1>
            <p>{description}</p>
            <p>{images}</p>
            </div>
        )
}

export default Card
