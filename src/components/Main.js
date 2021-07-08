import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Tickets from '../pages/Tickets';
import Contact from '../pages/Contact';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/tickets' component={Tickets}></Route>
            <Route exact path='/contact' component={Contact}></Route>
        </Switch>
    );
}

export default Main;