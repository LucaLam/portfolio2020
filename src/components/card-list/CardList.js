import React, { Component } from 'react'

import Card from '../card/Card'
import data from '../../data/ProjectData';

export class CardList extends Component {
    state={
        data: data
    }
    render() {
        const {data} = this.state
        return (
            <div className='card-list'>
            { data.map(project => <Card key={project.id} project={project}/>)
            }
            </div>
        )
    }
}

export default CardList
