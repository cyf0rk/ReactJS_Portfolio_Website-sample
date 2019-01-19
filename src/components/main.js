import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Name from './Contact/Name';
import Projects from './Projects/projects';
import './main.css';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/Contact" component={Name} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main;
