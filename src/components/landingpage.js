import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

import './landingpage.css';

class Landing extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src="https://static1.squarespace.com/static/514de5d9e4b020d11223781d/5156c8fbe4b0fc0d9467e954/515751e3e4b052be7733790e/1364677092463/Untitled-1.jpg?format=1000w" alt="Avatar" className="avatar"/>
            <div className="banner-text">
              <h2>I'm Marijan Batarilo</h2>
              <h1>Front-End Web Developer</h1>
              <hr/>
              <p>HTML/CSS | JavaScript | React | NodeJS</p>
              <div className="social-links">
                {/* LinkedIn */}
                <a href="" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                {/* Codepen */}
                <a href="" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-codepen" aria-hidden="true" />
                </a>
                {/* GitHub */}
                <a href="" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github" aria-hidden="true" />
                </a>
                {/* Instagram */}
                <a href="" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                {/* CodeCademy */}
                <a href="" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-code" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="button">
              <a href="">Download Resume</a>
              <p className="top">click to begin</p>
              <p className="bottom">14KB .zip</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
