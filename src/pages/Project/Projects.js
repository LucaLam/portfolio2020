import React, { Component } from 'react'

import './projects.scss'

import CardList from '../../components/card-list/CardList'

export class Projects extends Component {
    render() {
        return (
            <div className='projects-page'>
                <h1 className='project-header'>Projects</h1>
                <CardList />
            </div>
        )
    }
}

export default Projects
