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

  };

  render() {
    const { comfortable, learning } = this.state;

    return (
      <div className="tech-stack-container">
        <h1 className="component-header">Technology & Frameworks</h1>

        <div className="row">
          <div className="col-1-of-3">

            <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__heading">
                    What I've Dabbled In
                  </div>
                </div>

                <div className="card__side card__side--back">
                  <div className="card__details">
                    <ul>
                      {
                        comfortable.map(i => <li>{i}</li>)
                      }
                    </ul>
                  </div>
                </div>
            </div>

            <div className="card card-2">
                <div className="card__side card__side--front">
                  <div className="card__heading">
                    What I'm Learning
                  </div>
                </div>

                <div className="card__side card__side--back">
                  <div className="card__details">
                    <ul>
                      {
                        learning.map(i => <li>{i}</li>)
                      }
                    </ul>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Tech;
