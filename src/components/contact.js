import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Pamyk Charyyeva</h2>
            <img
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/68958551_1189987147877352_7006921444693114880_n.jpg?_nc_cat=101&_nc_oc=AQnVTZT8PC21jJVQy8nNSrbk5r9cERaE1OO0Tq0cQZxLA3rhDOA4oCSN2oz2HE7NGnrXftTMF3tqSZ_8WHOYors_&_nc_ht=scontent-lga3-1.xx&oh=5e2e507bd907f8f3fdcbd344325c39b3&oe=5DD8F675"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Wanna have a chat or grab a coffee? Shoot me an email and get in touch!</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <a href="https://www.linkedin.com/in/pamyk-charyyeva/" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"  />
                    </a>
                   /PamykCharyyyeva
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <a href="https://github.com/pamykcharyyeva" rel="noopener noreferrer" target="_blank">
                         <i className="fa fa-github-square" aria-hidden="true" />
                     </a>
                    /PamykCharyyyeva
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    pamyk.ch@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                  <a href="https://twitter.com/pamyk_coding" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                 @pamyk_coding
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Contact;