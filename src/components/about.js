import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="about-grid">
          <Cell col={12}>
            <img
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/67676408_1183305678545499_6367252333004324864_n.jpg?_nc_cat=103&_nc_oc=AQlm1vadTLVltmi6lrtCLvWPsYz_cdOwF7MqorG_5d87rbEGTTlRHn0ihC8EIKNLbuBuK8VaNdv2NvppDurERDsR&_nc_ht=scontent-lga3-1.xx&oh=8956e54d105da1d0d807f6e051efb53c&oe=5E161604"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <p></p>
              <p>I am a New York based Full Stack developer, and a graduate of the Flatiron School's Software Immersion Program. I have a natural passion for honing my existing programming skillsets, learning about new technologies, and adding new languages to my multilingual repertoire (which currently consists of English, Russian, Turkmen, and Turkish).
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