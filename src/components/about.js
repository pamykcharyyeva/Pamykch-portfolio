import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="about-grid">
          <Cell col={12}>
            <p></p>
            <img
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/68958551_1189987147877352_7006921444693114880_n.jpg?_nc_cat=101&_nc_oc=AQnVTZT8PC21jJVQy8nNSrbk5r9cERaE1OO0Tq0cQZxLA3rhDOA4oCSN2oz2HE7NGnrXftTMF3tqSZ_8WHOYors_&_nc_ht=scontent-lga3-1.xx&oh=5e2e507bd907f8f3fdcbd344325c39b3&oe=5DD8F675"
              alt="avatar"
              // style={{height: '250px'}}
              className="avatar-img"
              />
            <p></p>
            <div className="banner-text">
              <p></p>
              <p>New York based Full Stack developer & graduate of the Flatiron School's Software Immersion Program. I have a natural passion for honing my existing programming skillsets, learning about new technologies, and adding new languages to my multilingual repertoire (which currently consists of English, Russian, Turkmen, and Turkish).
              </p>
              <h1>My Stack</h1>
            <hr/>

          <p> Ruby/Rails | JavaScript | React | Redux | HTML/CSS | Bootstrap | ReactMDL </p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/pamyk-charyyeva/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true"  />
          </a>

          {/* Github */}
          <a href="https://github.com/pamykcharyyeva" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Twitter */}
          <a href="https://twitter.com/pamyk_coding" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter-square" aria-hidden="true" />
          </a>


        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;