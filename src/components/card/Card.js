import React, { Component } from 'react'

export class Card extends Component {

    

    render() {
        const projects = this.props
        console.log(projects)
        
        return (
            <div>
                <h1>This is a card component!</h1>
            </div>
        )
    }
}

export default Card
