import React, { Component } from 'react'

import './cardlist.scss'

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
                <Card projects={data} />
            </div>
        )
    }
}

export default CardList
