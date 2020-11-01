import React from 'react';
import {Switch, Route} from 'react-router-dom';

import LandingPage from './landing';
import AboutPage from './about';
import ContactPage from './contact';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
    </Switch>
)

export default Main;