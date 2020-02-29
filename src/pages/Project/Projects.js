import React, { Component } from 'react'

import './projects.scss'

import CardList from '../../components/card-list/CardList'

export class Projects extends Component {
    render() {
        return (
            <div className='projects-page'>
                <CardList />
            </div>
        )
    }
}

export default Projects
