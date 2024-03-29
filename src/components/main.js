import React from 'react';
import { Route, Switch } from 'react-router-dom';


import About from './about';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={About} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;