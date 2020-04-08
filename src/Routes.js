import React from 'react';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Home from './views/Home';
import View404 from './views/View404';

const Routes = () => {
    return(
        <>
        <Link to="/">Home</Link>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about">
                <Redirect to="/" />
            </Route>
            <Route path="*" component={View404} />
        </Switch>
        </>
    );
}

export default Routes;