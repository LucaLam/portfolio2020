import React, { Component } from "react";

import "./tech.scss";

export class Tech extends Component {
  state = {
    comfortable: [
      "React",
      "ES6",
      "HTML",
      "CSS/SCSS/SASS",
      "Redux",
      "Express",
      "Git"
    ],
    learning: [
      "Advanced ES6 concepts",
      "React Hooks",
      "UX/UI Principles",
      "Gatsby",
      "Firebase",
      "GraqhQL"
    ],

    showComfort: false,
    showLearn: false
  };

  handleComfort = e => {
    e.preventDefault();
    this.setState({
      showComfort: true
    });
    if (this.state.showComfort) {
      this.setState({
        showComfort: false
      });
    }
  };

  handleLearn = e => {
    e.preventDefault();
    this.setState({
      showLearn: true
    });
    if (this.state.showLearn) {
      this.setState({
        showLearn: false
      });
    }
  };

  render() {
    const { comfortable, learning, showComfort, showLearn } = this.state;

    return (
      <div className="tech-stack-container">
        <h1 className='component-header'>Technology & Frameworks</h1>
        <div className="lists-container">
        <div className='list-container'>
          <h2 className='list-header' onClick={this.handleComfort}>What I'm Comfortable with</h2>
          <ul className='list'>{showComfort ? comfortable.map(i => <li>{i}</li>) : null}</ul>
          </div>
          <div className='list-container'>
          <h2 className='list-header' onClick={this.handleLearn}>What I'm Learning</h2>
          <ul className='list'>{showLearn ? learning.map(i => <li>{i}</li>) : null}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Tech;
