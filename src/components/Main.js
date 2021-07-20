import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Tickets from '../pages/Tickets';

const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/tickets' component={Tickets}></Route>
        </Switch>
    );
}

export default Main;